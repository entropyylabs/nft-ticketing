import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const app_id = process.env.MORALIS_APP_ID;
const server_url = process.env.MORALIS_SERVER_URL;

ReactDOM.render(
  <MoralisProvider appId='xxxxxxxx' serverUrl='xxxxxxxx'>
    <App />
  </MoralisProvider>,
  document.getElementById("root")
);
