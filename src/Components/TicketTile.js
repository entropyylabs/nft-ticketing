import React from "react";

function TicketTile({ img, organizer, name, link, price }) {
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
    <div className='ticket-tile'>
      <img src={img} alt='' srcset='' />
      <div className='ticket-tile-details'>
        <h5 className='name'>{name}</h5>
        <h5 className='organizer'>
          <i class='far fa-user'></i> {organizer}
        </h5>
        <div className='ticket-tile-bottom'>
          <button
            onClick={() => {
              sendETH(price, address);
            }}
          >
            Buy {price}
          </button>
          <a href={link} target='_blank'>
            <i class='fab fa-cart'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TicketTile;
