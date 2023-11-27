import "./App.css";
import React, { useEffect } from "react";
import { Reaplay } from "reaplay";
import PlayPause from "./PlayPause";
import { useTimer } from "react-timer-hook";

const NewAudioPlayer = ({
  trackName,
  songs,
  trackInfo,
  playingTrackIndex,
  setPlayingTrackIndex,
}) => {
  let globalPlayer;
  let trackIndex = 0;
  if (trackName == "Shpilkes Preview")
    songs = [require("../assets/shp/SHP_Soundtrack_Preview_v1.mp3")];
  else if (trackName == "Stalling")
    songs = [require("../assets/STL+DEMO+M10+At+Shit_s+End.mp3")];
  else if (trackName == "A Bard’s Tale: Norse Vol. 1")
    songs = [require("../assets/NRS+DEMO+105+Pursuit.mp3")];
  let timestamp = new Date();
  timestamp.setSeconds(timestamp.getSeconds() + 1);
  const { isRunning, restart } = useTimer({
    autoStart: true,
    expiryTimestamp: timestamp,
    onExpire: () => {
      if (
        globalPlayer.trackIndex != playingTrackIndex &&
        setPlayingTrackIndex
      ) {
        setPlayingTrackIndex(globalPlayer.trackIndex);
      }
      const time = new Date();
      time.setSeconds(time.getSeconds() + 1);
      restartSecond(time);
    },
  });

  const { restart: restartSecond } = useTimer({
    autoStart: false,
    expiryTimestamp: timestamp,
    onExpire: () => {
      if (
        globalPlayer.trackIndex != playingTrackIndex &&
        setPlayingTrackIndex
      ) {
        setPlayingTrackIndex(globalPlayer.trackIndex);
      }
      const time = new Date();
      time.setSeconds(time.getSeconds() + 0.5);
      timestamp += 2000;
      restart(time);
    },
  });

  useEffect(() => {
    let trackIndex = -1;
    for (let i = 0; i < trackInfo.length; i++) {
      if (trackName == trackInfo[i].title) {
        trackIndex = i;
      }
    }
    console.log(songs, trackName, trackInfo);
    globalPlayer.setTrackIndex(trackIndex);
  }, [trackName]);

  return (
    <Reaplay tracks={songs} startIndex={0} isPlaying={false}>
      {(player) => {
        globalPlayer = player;
        trackIndex = player.trackIndex;
        return (
          <>
            <div className="audio-player">
              <div style={{ alignItems: "center", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    paddingBottom: "8px",
                    paddingTop: "8px",
                  }}
                >
                  <div
                    className={`circular-play-pause-button ${
                      player.isPlaying ? "playing" : ""
                    }`}
                    onClick={() => {
                      player.setIsPlaying(player.isPlaying ? false : true);
                    }}
                    style={{
                      alignSelf: "center",
                    }}
                  >
                    <PlayPause isPlaying={player.isPlaying} />
                  </div>
                  <input
                    type="range"
                    value={player.trackProgress}
                    step=".01"
                    min="0"
                    max={
                      player.duration ? player.duration : `${player.duration}`
                    }
                    className="progress"
                    onChange={(e) => player.onScrub(e.target.value)}
                    onMouseUp={(e) => player.onScrubEnd(e)}
                    onKeyUp={(e) => player.onScrubEnd(e)}
                    style={{
                      background: `linear-gradient(to right, #DEE2E6 0%, #DEE2E6 ${
                        (player.trackProgress / player.duration) * 100
                      }%, gray ${
                        (player.trackProgress / player.duration) * 100
                      }%, gray 100%)`,
                      alignSelf: "center",
                      maxWidth: "60%",
                    }}
                  />
                  <p
                    style={{
                      alignSelf: "center",
                      marginBottom: "0",
                      color: "white",
                      fontSize: ".96rem",
                      fontFamily: "Georgia",
                      paddingLeft: "5px",
                    }}
                  >
                    {player.trackProgressText.substring(1)}/
                    {player.durationText.substring(1)}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Reaplay>
  );
};

export default NewAudioPlayer;
