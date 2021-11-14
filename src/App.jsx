import React, { useState } from "react";
import "./styles.css";

const onClickPlay = () => {};

export const App = () => {
  const [images] = useState([
    "./images/img01.jpg",
    "./images/img02.jpg",
    "./images/img03.jpg",
    "./images/img04.jpg"
  ]);

  return (
    <main id="main1">
      <div className="imgarea">
        {images.map((image) => {
          return (
            <img
              key={image}
              className="img current"
              src={image}
              alt="{image}"
            />
          );
        })}
      </div>
      <ul className="dot"></ul>
      <div className="btnarea">
        <button className="prev">prev</button>
        <button className="pause">play</button>
        <button onClick={onClickPlay} className="next">
          next
        </button>
      </div>
    </main>
  );
};
