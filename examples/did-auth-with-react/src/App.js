import React, { useContext } from "react";

import { DidSessionContext } from "@arcblock/did-connect/lib";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const { session } = useContext(DidSessionContext);

  console.log(session);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={session.user ? session.user.avatar : logo}
          className="App-logo"
          alt="logo"
        />
        {session.loading && <p>Initialize session...</p>}
        {session.user && <p>{session.user.name}</p>}
        {!session.user && !session.loading && (
          <p>
            You are not logged in, click{" "}
            <a onClick={() => session.login()} href="javascript:void(0);" className="App-link">
              Here
            </a>{" "}
            to login
          </p>
        )}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://arcblock.github.io/ux/?path=/docs/connect-introduction--page"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Usage Examples
        </a>
      </header>
    </div>
  );
}

export default App;
