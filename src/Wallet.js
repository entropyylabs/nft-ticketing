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

  const sendETH = async () => {
    const signer = wallet.getSigner(); // select DefaultChain signer by default

    console.log(`Transfer txn on ${signer.getChainId()} chainId`);

    // NOTE: on mainnet, the balance will be of ETH value
    // and on matic, the balance will be of MATIC value
    // const balance = await signer.getBalance()
    // if (balance.eq(ethers.constants.Zero)) {
    //   const address = await signer.getAddress()
    //   throw new Error(`wallet ${address} has 0 balance, so cannot transfer anything. Deposit and try again.`)
    // }

    const toAddress = "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0";

    const tx1 = {
      delegateCall: false,
      revertOnError: false,
      gasLimit: "0x55555",
      to: toAddress,
      value: ethers.utils.parseEther("0.00134"),
      data: "0x",
    };

    const tx2 = {
      delegateCall: false,
      revertOnError: false,
      gasLimit: "0x55555",
      to: toAddress,
      value: ethers.utils.parseEther("0.001242"),
      data: "0x",
    };

    const provider = signer.provider;

    console.log(
      `balance of ${toAddress}, before:`,
      await provider.getBalance(toAddress)
    );

    const txnResp = await signer.sendTransactionBatch([tx1, tx2]);
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
