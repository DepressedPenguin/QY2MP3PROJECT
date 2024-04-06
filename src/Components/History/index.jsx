import React, { useContext } from "react";
import "./style.css";
import { historyContext } from "../Loading";

export default function History() {
  // HISTORY CONTEXT
  const last_song = useContext(historyContext);

  // Check if last_song is defined
  if (!last_song || last_song.length === 0) {
    console.log("Empty");
    return null; // Return null or any other component indicating that history is empty
  }

  console.log("Full");
  console.log(last_song);

  // Render the history list
  return (
    <>
      <div className="history_container">
        <h1>{last_song}</h1>
        {/* Render each item in the history list */}
        {last_song.map((item, index) => (
          <div key={index}>
            <h1>{item}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
