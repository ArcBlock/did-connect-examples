import React, { useContext } from 'react';

import { DidSessionContext } from '@arcblock/did-connect/lib';

import logo from './logo.svg';
import './App.css';

function App() {
  const { session } = useContext(DidSessionContext);

  let sessionMarkup = null;
  if (session.loading) {
    sessionMarkup = <p>Initialize session...</p>;
  } else {
    if (session.user) {
      sessionMarkup = (
        <p>
          You are logged in as <strong>{session.user.name}</strong>, click{' '}
          <a onClick={() => session.logout()} href="javascript:void(0);" className="App-link">
            here
          </a>{' '}
          to logout
        </p>
      );
    } else {
      sessionMarkup = (
        <p>
          You are not logged in, click{' '}
          <a onClick={() => session.login()} href="javascript:void(0);" className="App-link">
            here
          </a>{' '}
          to login
        </p>
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={session.user ? session.user.avatar : logo} className="App-logo" alt="logo" />
        {sessionMarkup}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://arcblock.github.io/ux/?path=/docs/connect-introduction--page"
          target="_blank"
          rel="noopener noreferrer">
          More Usage Examples
        </a>
      </header>
    </div>
  );
}

export default App;
