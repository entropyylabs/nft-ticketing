import React, { useState, useEffect } from "react";
import "./App.css";
import { sequence } from "0xsequence";
import { ethers } from "ethers";
import Wallet from "./Wallet";
import Landing from "./Pages/Landing";

function App() {
  const network = "polygon";
  const wallet = new sequence.Wallet(network);

  const [connected, setConnected] = useState(false);

  const connect = async (authorize = false) => {
    const connectDetails = await wallet.connect({
      app: "Ticketing Dapp",
      authorize,
      keepWalletOpened: true,
    });
  };

  const isConnected = async () => {
    setConnected(wallet.isConnected());
    console.log(connected);
  };

  useEffect(() => {
    isConnected();
    console.log(connected);
  });

  return (
    <div className='App'>
      {!connected ? (
        <div>
          Hello welcome!<button onClick={() => connect(true)}>Connect</button>
        </div>
      ) : (
        <Landing />
      )}
      {/* <Wallet wallet={wallet} /> */}
    </div>
  );
}

export default App;
