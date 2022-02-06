import React, { useState, useEffect } from "react";
import "./App.css";
import { sequence } from "0xsequence";
import { ethers } from "ethers";
import Wallet from "./Wallet";
import Landing from "./Pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./Pages/Explore";
import Create from "./Pages/Create";
import Navbar from "./Components/Navbar";
import MintTickets from "./Pages/MintTickets";

function App() {
  const network = "polygon";
  const wallet = new sequence.Wallet(network);

  const [connected, setConnected] = useState(false);

  const connect = async (authorize = false) => {
    const connectDetails = await wallet.connect({
      app: "NFTickets",
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
          <h5 className='welcome-mssg name'>NFTickets</h5>
          <div className='connect-btn-holder'>
            <button className='landing-btn' onClick={() => connect(true)}>
              Connect Wallet
            </button>
          </div>
        </div>
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/create' element={<Create />} />
            <Route path='/mint' element={<MintTickets />} />
          </Routes>
        </Router>
      )}
      {/* <Wallet wallet={wallet} /> */}
    </div>
  );
}

export default App;
