import React from "react";
import CategoryButton from "../Components/CategoryButton";

function MintTickets() {
  return (
    <div className='page'>
      <div className='mint-top'>
        <img
          src='https://i.postimg.cc/s2xnLF5W/image-93.png'
          alt=''
          srcset=''
        />
        <span className='party-title'>All Night Long</span>
        <CategoryButton name='Party' />
      </div>
      <div className='mint-bottom'>
        <div className='add-dropdown-heading'>
          <span>Add Tickets</span>
          <span className='add-btn'>
            <i class='fas fa-plus'></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MintTickets;
