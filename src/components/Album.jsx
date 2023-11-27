import NewAudioPlayer from "./AudioPlayer";
import "react-h5-audio-player/lib/styles.css";
import { Link } from "react-router-dom";

const Album = (props) => {
  return (
    <div style={{ width: "100%", paddingBottom: "12%" }}>
      {props.title == "Shpilkes Preview" ? (
        <Link
          style={{ textDecoration: "none", color: "gray" }}
          to="/music/shpilkes"
        >
          <img
            style={{ width: "100%", paddingBottom: "5%" }}
            alt="album cover"
            src={props.img}
          />
        </Link>
      ) : (
        <img
          style={{ width: "100%", paddingBottom: "5%" }}
          alt="album cover"
          src={props.img}
        />
      )}
      {props.file ? (
        <div style={{ paddingBottom: "5%" }}>
          <NewAudioPlayer
            trackName={props.title}
            songs={props.file ? props.file : ""}
            trackInfo={props.info}
          />
        </div>
      ) : (
        <></>
      )}
      <p style={{ color: "white", fontFamily: "Georgia" }}>
        <b>
          {props.title}
          <br />
        </b>
        <i>{props.description}</i>
        {props.info ? (
          props.info[0].title == "Shpilkes Preview" ? (
            <div>
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/music/shpilkes"
              >
                Learn more...
              </Link>
            </div>
          ) : (
            <div style={{ color: "black" }}>{"."}</div>
          )
        ) : (
          <div style={{ color: "black" }}>{"."}</div>
        )}
      </p>
    </div>
  );
};

export default Album;
