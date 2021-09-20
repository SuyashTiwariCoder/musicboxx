import React from "react";
import "./styles.css";
import { useState } from "react";

const mySongs = {
  HipHop: [
    {
      songName: "NunChaku",
      singer: "Seedhe Maut",
      rating: "5/5"
    },
    {
      songName: "Midnight Snack",
      singer: "Druv Asthetic",
      rating: "5/5"
    },
    {
      songName: "Mantoniyat",
      singer: "Raftaar",
      rating: "4/5"
    }
  ],
  SlowSongs: [
    {
      songName: "Tu aake Dekhle",
      singer: "King",
      rating: "5/5"
    },
    {
      songName: "Ride pe",
      singer: "Muhfaad",
      rating: "4/5"
    },
    {
      songName: "Makhna",
      singer: "Honey Singh",
      rating: "3/5"
    }
  ],
  RetroSongs: [
    {
      songName: "Chura Liya Hai Tumne Jo dil Ko ",
      singer: "Lata Mangeshkar",
      rating: "5/5"
    },
    {
      songName: "Yeh Sham diwani ",
      singer: "Kishore Kumar",
      rating: "4/5"
    },
    {
      songName: "Nazar k Samne ",
      singer: "Kumar Sanu",
      rating: "3/5"
    }
  ]
};
let name = "Singer: ";
export default function App() {
  const [genre, setGenre] = useState("HipHop");
  function clickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span>🎵</span> Music Box
      </h1>
      <h4>
        These are my some favorite songs . Click below to explore new genres
      </h4>
      <div>
        {Object.keys(mySongs).map((genre) => (
          <button
            onClick={() => clickHandler(genre)}
            style={{ padding: "1rem", margin: "1rem" }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {mySongs[genre].map((song) => (
            <li key={song.songName}>
              {" "}
              <div style={{ fontSize: "larger" }}>{song.songName}</div>
              {/* <hr /> */}
              <div style={{ fontSize: "smaller" }}>
                {name}
                {song.singer}
              </div>
              {/* <hr /> */}
              <div style={{ fontSize: "smaller" }}>{song.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
