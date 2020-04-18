const axios = require('axios');
const express = require('express');
const querystring = require('querystring');

const router = express.Router();
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, SERVICE_HOST } = process.env;

const tokens = {};

const getUser = async (accessToken, userDid) => {
  const { data } = await axios.get(`${SERVICE_HOST}/api/login/o/oauth2/users/${userDid}?access_token=${accessToken}`);
  return data;
};

// Redirect to authorize page of DID Connect
router.get('/', async (req, res) => {
  res.redirect(
    `${SERVICE_HOST}/login/oauth2/authorize?${`client_id=${encodeURIComponent(
      CLIENT_ID
    )}&state=test&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`}`
  );
});

// Callback after authorized
router.get('/oauth/callback', async (req, res) => {
  const { code } = req.query;

  res.render('index', { code });
});

// Get user by access_token
router.get('/api/user', async (req, res) => {
  try {
    const { code } = req.query;

    const { data: token } = await axios.post(
      `${SERVICE_HOST}/api/login/o/oauth2/token`,
      querystring.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      })
    );

    tokens[token.access_token] = token;

    const user = await getUser(token.access_token, token.user_did);

    res.json(user);
  } catch (error) {
    console.error('get token failed:');
    console.log(error.message);
    res.status(500).json({ errmsg: error.message });
  }
});

module.exports = router;
