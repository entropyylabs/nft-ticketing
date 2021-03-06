import React from "react";
import { sequence } from "0xsequence";
import { ethers } from "ethers";

function Wallet({ wallet }) {
  const getChainID = async () => {
    console.log("chainId:", await wallet.getChainId());

    const provider = wallet.getProvider();
    console.log("provider.getChainId()", await provider.getChainId());

    const signer = wallet.getSigner();
    console.log("signer.getChainId()", await signer.getChainId());
  };

  const sendETH = async (amt, toAddress) => {
    const signer = wallet.getSigner(); // select DefaultChain signer by default

    console.log(`Transfer txn on ${signer.getChainId()} chainId`);

    const tx1 = {
      delegateCall: false,
      revertOnError: false,
      gasLimit: "0x55555",
      to: toAddress,
      value: ethers.utils.parseEther(amt),
      data: "0x",
    };

    const provider = signer.provider;

    console.log(
      `balance of ${toAddress}, before:`,
      await provider.getBalance(toAddress)
    );

    const txnResp = await signer.sendTransactionBatch([tx1]);
    await txnResp.wait();

    console.log(
      `balance of ${toAddress}, after:`,
      await provider.getBalance(toAddress)
    );
  };

  return (
    <div>
      <button onClick={() => getChainID()}>ChainID</button>
    </div>
  );
}

export default Wallet;
