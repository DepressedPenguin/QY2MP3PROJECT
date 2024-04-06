import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <>
      <footer className="Footer">
        <ul id="ul_footer">
          <li>
            <Link className="remove_deafult_i" to="Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="remove_deafult_i" to="Copyright">
              Copyright Claims
            </Link>
          </li>
          <li>
            <Link className="remove_deafult_i" to="PrivacyPolicy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="remove_deafult_i" to="Tou">
              Tou
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
