import React from "react";
import TicketTile from "../Components/TicketTile";
import eventHelper from "../helpers.js";

function Explore() {
  const events = eventHelper.getEvents();
  return (
    <div className='page'>
      <div className='page-header'>
        <h1>Explore</h1>
        <div className='stretcher'></div>
        <div className='tickets-holder'>
          {events &&
            events.map(({ name, organizer, price }) => (
              <TicketTile name={name} organizer={organizer} price={price} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
