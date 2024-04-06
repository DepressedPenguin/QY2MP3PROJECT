import { useEffect, useRef, useState } from "react";
import "./style.css";
import Loading from "../Loading";

export default function Input({ theme }) {
  const [url, setUrl] = useState("");
  const [showInput, setShowInput] = useState(true); // state visibility
  const [showLoading, setShowLoading] = useState(false); // state visibility

  const urlInput = useRef(null);
  const [date, setDate] = useState(() => new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate((prevDate) => new Date(prevDate.getTime() + 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLoadingClick = () => {
    const urlValue = urlInput.current.value;
    if (urlValue == "") {
      alert("Insert Url ):");
      return;
    } else {
      setUrl(urlValue);
      setShowInput(false);
      setShowLoading(true);
    } // Show the loading component become true
  };

  return (
    <>
      {showInput && (
        <div className={theme}>
          <div className="input_div">
            <div className="sub_input">
              <div className="intert_url_p">
                <p>Insert a YouTube video URL :</p>
              </div>
              <div className="input_grids">
                <input
                  placeholder="Past Youtube Link Here ..."
                  ref={urlInput}
                  type="text"
                />
                <button className="btn_con" onClick={handleLoadingClick}>
                  Convert
                </button>
              </div>
              <div className="qoute_convert">
                <p class="time_zone background text">{date.toLocaleString()}</p>
                <p>
                  Fast Convert To <span id="mp3_color">MP3</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {showLoading && <Loading url={url} />}{" "}
    </>
  );
}
