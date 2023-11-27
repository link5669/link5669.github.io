import { useState } from "react";
import TextLoop from "react-text-loop";
import { useTimer } from "react-timer-hook";
const RandomList = (props) => {
  let timestamp = props.time;
  timestamp.setSeconds(timestamp.getSeconds() + 0.5);
  const [currWord, setCurrWord] = useState("");
  let primary = ["Film", "TV", "Video Game", "Animation"];
  const [words, setWords] = useState([
    "Video Gaame",
    "Animaaation",
    "Interactive",
    "Theme Paark",
    "Multimediaa",
    "Multi-Genre",
  ]);

  const allWords = [
    "Video Game",
    "Animation",
    "Interactive",
    "Theme Park",
    "Multimedia",
    "Multi-Genre",
    "J-Pop & Anime",
    "Film",
    "TV",
    "Video Game",
    "Animation",
  ];
  const { isRunning, restart } = useTimer({
    autoStart: true,
    expiryTimestamp: timestamp,
    onExpire: () => {
      let nextWord;
      if (primary.includes(currWord)) {
        nextWord =
          props.secondary[Math.floor(Math.random() * props.secondary.length)];
        props.removeItemSecondary(nextWord);
      } else {
        nextWord =
          props.primary[Math.floor(Math.random() * props.primary.length)];
        props.removeItemPrimary(nextWord);
      }
      setWords([nextWord, ...words]);
      setCurrWord(nextWord);
      const time = new Date();
      time.setSeconds(time.getSeconds() + 5);
      restartSecond(time);
    },
  });

  const { restart: restartSecond } = useTimer({
    autoStart: false,
    expiryTimestamp: timestamp,
    onExpire: () => {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 0.5);
      timestamp += 2000;
      restart(time);
    },
  });

  return (
    <>
      <i>
        {isRunning ? (
        <div style={{ textAlign: "right" }}>
          <TextLoop
            interval="20"
            style={{ textAlign: "right", padding: 0, margin: 0 }}
          >
            {words.map((word, index) => (
              <span style={{color: "#c0c0c0" }}key={index}>{word.toUpperCase()}</span>
            ))}
          </TextLoop>
        </div>
        ) : (
          <span style={{color: "#c0c0c0" }}>{currWord.toUpperCase()} </span>
        )}
      </i>
    </>
  );
};

export default RandomList;
