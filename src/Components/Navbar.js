import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();
  const [show, setShow] = useState(false);

  if (location.pathname != "/") {
    return (
      <div className='navbar'>
        <div className='menu'>
          <i
            class='fas fa-bars'
            onClick={() => {
              setShow(!show);
            }}
          ></i>
        </div>
        <div
          className='menu-items'
          style={{ display: `${show ? "block" : "none"}` }}
        >
          <ul>
            <li>Scan QR code</li>
            <li>My Events</li>
            <li>My Subscription</li>
            <li>My Accounts</li>
          </ul>
        </div>
      </div>
    );
  }
  return null;
}

export default Navbar;
