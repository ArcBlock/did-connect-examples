# OAuth2.0 Express.js example

The OAuth2 example of [Express.js](https://expressjs.com/).

## Requirements

- Node.js v10+

## Getting Started

1. Create .env file in the root of `oauth2-expressjs` project, for example:

```
PORT=3005 # port of the demo
CLIENT_ID=6f350ef12e9a42be8651944dca1fc104 # your client_id
CLIENT_SECRET=z2chpaHa4CpcnRYdcaKmVzv6YspeWSCsbRW5VoVL # your client_secret
REDIRECT_URI=http://localhost:3005/oauth/callback # redirect uri after authorized
SERVICE_HOST=http://localhost:3000 # connect service host
```

2. Install Dependencies: `npm install`
3. Start: `npm start`
