import React from "react";
import ReactDOM from "react-dom";
import { DidSessionProvider } from "@arcblock/did-connect/lib";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Please change these to your own application settings
const appDid = "zNKkYPct7wrDyZM3ZDB9P7FoBHWk8iipujyZ";
const serviceHost = "http://192.168.1.5:4040";

// Required: Wrap the application with DidSessionProvider
const WrappedApp = () => (
  <DidSessionProvider appDid={appDid} serviceHost={serviceHost}>
    <App />
  </DidSessionProvider>
);

ReactDOM.render(<WrappedApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
