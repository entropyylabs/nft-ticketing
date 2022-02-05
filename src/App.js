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
        <div className='page connect-page'>
          <img
            src='https://i.postimg.cc/VvBf46Qm/Daft-Punk-Copy-1-1280x577-1.png'
            alt=''
          />
          <h5 className='welcome-mssg'>Welcome to</h5>
          <h5 className='welcome-mssg name'>-----</h5>
          <div className='connect-btn-holder'>
            <button className='landing-btn' onClick={() => connect(true)}>
              Connect Wallet
            </button>
          </div>
        </div>
      ) : (
        <Landing />
      )}
      {/* <Wallet wallet={wallet} /> */}
    </div>
  );
}

export default App;
