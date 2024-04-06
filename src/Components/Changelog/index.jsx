import React from "react";
import "./style.css";

export default function Changelog({ theme }) {
  return (
    <>
      <div className={theme}>
        <div className="changelog_section">
          <div className="sub_changelog ">
            <div className="title_changelog background text">
              <h1>Changelog</h1>
            </div>
            <div className="news_logs">
              <div className="changelog_ann background">
                <p id="date_logs" className="text">
                  2024-03-29
                </p>
                <p className="text">Coming Soon</p>
              </div>
              <div className="changelog_ann background"></div>
              <div className="changelog_ann background"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
