import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className='page landing-page'>
      <img
        src='https://i.postimg.cc/VvBf46Qm/Daft-Punk-Copy-1-1280x577-1.png'
        alt=''
      />
      <h5 className='welcome-mssg'>Welcome to</h5>
      <h5 className='welcome-mssg name'>-----</h5>
      <div className='landing-btn-holder'>
        <Link to='/explore'>
          <button className='landing-btn explore'>Explore</button>
        </Link>
        <Link to='/create'>
          <button className='landing-btn list'>List my event</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
