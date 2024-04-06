import React from "react";
import "./style.css";

import paypal_icon from "../guide_imgs/paypal.png";

export default function Donation() {
  return (
    <>
      <div className="donation_section">
        <div className="sub_donation">
          <a href="https://www.paypal.com/paypalme/ZElaroussi" target="blank">
            <img src={paypal_icon}></img>
          </a>
        </div>
      </div>
    </>
  );
}
