import React from "react";
import "./style.css";

import img_1 from "../guide_imgs/1.png";
import img_2 from "../guide_imgs/2.png";
import img_3 from "../guide_imgs/3.png";

export default function Guide({ theme }) {
  return (
    <>
      <div className={theme}>
        <div className="Guide" id="headline_guide">
          <div className="main_guide">
            <div className="headline_h1">
              <h1>How to download YouTube videos ?</h1>
            </div>
            <div className="guide_imgs">
              <div className="box_show background">
                <div className="title_pic text">
                  <p>1-Paste YouTube URL</p>
                </div>
                <div className="pic_guide">
                  <img alt="step_1" src={img_1}></img>
                </div>
              </div>
              <div className="box_show background">
                <div className="title_pic text">
                  <p>2-Convert with a Click</p>
                </div>
                <div className="pic_guide">
                  <img alt="step_2" src={img_2}></img>
                </div>
              </div>
              <div className="box_show background">
                <div className="title_pic text">
                  <p>3- Download Instantly</p>
                </div>
                <div className="pic_guide">
                  <img alt="step_3" src={img_3}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
