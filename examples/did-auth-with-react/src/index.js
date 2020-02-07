import React from "react";
import ReactDOM from "react-dom";
import { DidSessionProvider } from "@arcblock/did-connect/lib";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const appDid = "zNKo11Ah1Y6w4oaizU4YgcRmB2Z5CTsmSmPR";
const serviceHost = "http://connect-dev.arcblockio.cn";

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
