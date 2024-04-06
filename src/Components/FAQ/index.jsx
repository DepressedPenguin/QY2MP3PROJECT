import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import "../DarkMode/style.scss";

export default function FAQ({ theme }) {
  return (
    <>
      <div className={theme}>
        <div className="faq_section">
          <div className="faq_question">
            <div className="box_quisitons_with_contact background text">
              <h1>Frequently Asked Questions</h1>
              <button id="button_contact_faq">
                <Link id="link_remove_deco_contact" to="/Contact">
                  Contact Us
                </Link>
              </button>
            </div>
            <div className="box_quisitons background text">
              <p className="bold_headline_faq">
                Which platforms are supported?
              </p>
              <p>Currently we only support YouTube.</p>
            </div>
            <div className="box_quisitons background text">
              <p className="bold_headline_faq">Which formats are supported?</p>
              <p>
                Atm it is only possible to convert YouTube videos to MP3 (audio)
              </p>
            </div>
            <div className="box_quisitons background text">
              <p className="bold_headline_faq">I am receiving an error.</p>
              <p>Please make sure that your video is not:</p>
              <ul className="ul_qus">
                <li>Longer then 90 minutes</li>
                <li>Age restricted</li>
                <li>Only available in few countries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
