import React, { useState } from "react";
import "./style.css";
import "../DarkMode/style.scss";

import github_icon from "../contact_icons/github.png";
import github_dark from "../contact_icons/github_dark.png";

import discord_icon from "../contact_icons/discord.png";
import discord_dark from "../contact_icons/discord_dark.png";

import linkdin_icon from "../contact_icons/linkedin.png";
import linkdin_dark from "../contact_icons/linkedin_dark.png";

import x_icon from "../contact_icons/x.png";
import x_dark from "../contact_icons/x_dark.png";

export default function Contact({ theme }) {
  // IF CLICK SHOW DISCORD USERNAME
  const [discordname, setdiscordname] = useState(null);
  const discord_name = "depressed_penguin";
  const handOnClickDiscord = () => {
    setdiscordname(discord_name);
  };

  return (
    <>
      <div className={theme}>
        <div className="Contact_Us_Section">
          <div className="contac_us_boxs background">
            <a href="https://github.com/DepressedPenguin" target="blank">
              <a
                href="https://github.com/DepressedPenguin?tab=repositories"
                target="blank"
              >
                {theme === "dark" ? (
                  <img alt="github icon" src={github_icon}></img>
                ) : (
                  <img alt="github icon" src={github_dark}></img>
                )}
              </a>
            </a>
            <p className="text">Github</p>
          </div>
          <div className="contac_us_boxs background">
            {theme === "dark" ? (
              <img
                onClick={handOnClickDiscord}
                alt="discord icon"
                src={discord_icon}
              ></img>
            ) : (
              <img
                onClick={handOnClickDiscord}
                alt="discord icon"
                src={discord_dark}
              ></img>
            )}
            <p className="text">Discord</p>
            {discordname ? <p className="text">{discord_name}</p> : null}
          </div>
          <div className="contac_us_boxs background">
            <a
              href="https://www.linkedin.com/in/zakaria-elaroussi-609121223/"
              target="blank"
            >
              {theme === "dark" ? (
                <img alt="linkedin icon" src={linkdin_icon}></img>
              ) : (
                <img alt="linkedin icon" src={linkdin_dark}></img>
              )}
            </a>
            <p className="text">LinkedIn</p>
          </div>
          <div className="contac_us_boxs background">
            <a href="https://twitter.com/DP_0_PENGUIN" target="blank">
              {theme === "dark" ? (
                <img alt="X icon" src={x_icon}></img>
              ) : (
                <img alt="X icon" src={x_dark}></img>
              )}
            </a>
            <p className="text">Twitter</p>
          </div>
        </div>
      </div>
    </>
  );
}
