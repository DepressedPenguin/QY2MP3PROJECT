import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./style.css";
import "../DarkMode/style.scss";
import mp3_download_img from "../dark_mode_icons/mp3_icon.png";
import History from "../History";
import Navbar from "../Navbar";

export const historyContext = React.createContext();

export default function Loading({ url, theme }) {
  // FOR TITLE
  const [title, settitle] = useState();
  // FOR author
  const [author, setauthor] = useState();
  // LINK IMG
  const [img, setimg] = useState();
  // DOWNLIAND LINK
  const [link, setlink] = useState();
  // VIDEO ID
  const [id, setid] = useState();

  // HISTORY STATE
  const [lisHistory, setlisHistory] = useState([]);
  // const [displayhistory, setdisplayhistory] = useState(false);
  // const [displayloading, setdisplayloading] = useState(true);
  // const navigate = useNavigate();

  function getYouTubeVideoId(url) {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1];
    } else {
      console.error("Invalid YouTube URL");
      return null;
    }
  }

  async function fetchapi() {
    const videoId = getYouTubeVideoId(url);

    if (!videoId) {
      console.error("Failed to extract video ID");
      return;
    }

    if (!url) {
      console.error("Youtube URL is undefined", url);
      return;
    }

    const apiURL = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;
    const options = {
      method: "GET",
      url: apiURL,
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_APP_API_HOST,
      },
    };

    try {
      const response = await fetch(apiURL, options);
      const result = await response.json();
      settitle(result.title);
      setauthor(result.author);
      setimg(result.thumb);
      setlink(result.link);
      setid(result.id);

      // setlisHistory((prev) => {
      //   return [
      //     ...prev,
      //     result.title,
      //     result.author,
      //     result.thumb,
      //     result.link,
      //     result.id,
      //   ];
      // });

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  // const handlHistory = () => {
  //   setdisplayhistory(true);
  //   setdisplayloading(true);
  // };

  // console.log(lisHistory);

  useEffect(() => {
    // when componont mount
    fetchapi();
  }, [url]); // trigger the fetchapi() function when the url prop changes

  return (
    <>
      {/* {displayloading && ( */}
      <div className={theme}>
        <div>
          <div className="loading_convert background">
            {/* IMG SONG */}
            <div className="img_song">
              <img alt="mp3 img" id="mp3_img" src={img} />
            </div>
            <div className="deatils_song">
              <div className="box_deatils">
                <p id="title_song_api">{title}</p>
              </div>
              <div className="box_deatils">
                <p className="author_p">Author : {author}</p>
              </div>
              <div className="box_deatils_with_btn">
                <p className="author_p">Video Id : {id}</p>
              </div>
            </div>
            <div className="download_song_button">
              <a href={link} target="blank">
                <img
                  className="img_fix"
                  src={mp3_download_img}
                  alt="Download Icon"
                />
              </a>
              <p>Download</p>
              {/* <button onClick={handlHistory}>Show</button> */}
            </div>
          </div>
        </div>
      </div>
      {/* )}
      {displayhistory && (
        <historyContext.Provider value={lisHistory}>
          <History />
        </historyContext.Provider>
      )}
      <Navbar handlHistory={handlHistory} />; */}
    </>
  );
}
