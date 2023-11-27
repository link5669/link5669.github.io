import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MarcNavbar from "./components/Navbar";
import Quote from "./components/Quote";
import MarcFooter from "./components/Footer";
import RandomList from "./components/RandomList";

function App() {
  const [width, height] = [window.screen.width, window.screen.height];
  const isMobile = Math.min(width, height) < 768;
  const time = new Date();
  time.setSeconds(time.getSeconds() + 0.5);
  let primary = ["      Film", "        TV", "Video Game", "Animation"];
  let secondary = [
    "Interactive",
    "Theme Park",
    "Multimedia",
    "Multi-Genre",
    "Library",
    "Musical Theater",
    "J-Pop & Anime",
  ];

  function removeItemPrimary(item) {
    const index = primary.indexOf(item);
    primary.splice(index, 1);
    console.log(primary.length);
    if (primary.length == 0) {
      primary.push("Film", "TV", "Video Game", "Animation");
    }
  }

  function removeItemSecondary(item) {
    const index = secondary.indexOf(item);
    secondary.splice(index, 1);
    if (secondary.length == 0) {
      secondary.push(
        "Interactive",
        "Theme Park",
        "Multimedia",
        "Multi-Genre",
        "Library",
        "Musical Theater",
        "J-Pop & Anime"
      );
    }
  }

  return (
    <>
      <div style={{ width: "100vw", background: "black" }}>
        <MarcNavbar />
        <div
          style={{
            paddingBottom: "20px",
            height: "5rem",
            fontWeight: 100,
          }}
          className="subhead"
        >
          <Row
            style={{
              transform: "translateX(-7px)",
              display: isMobile ? "none" : "",
            }}
          >
            <Col style={{ textAlign: "right" }}>
              <RandomList
                primary={primary}
                secondary={secondary}
                removeItemPrimary={removeItemPrimary}
                removeItemSecondary={removeItemSecondary}
                time={time}
              />
            </Col>
            <Col style={{ paddingLeft: "0" }}>
              <span style={{ textAlign: "left", color: "#c0c0c0" }}>
                <i>
                  {"| "}
                  COMPOSER
                </i>
              </span>
            </Col>
          </Row>
        </div>
        <Container>
          <Row>
            <Col style={{ display: isMobile ? "none" : "" }}>
              <img style={{ width: "100%" }} src={require("./marc_yu.jpeg")} />
            </Col>
            <Col>
              <div className="textbox">
                <h2 className="subhead" style={{ paddingBottom: "7%" }}>
                  <b>
                    Marc Yu is an award-winning pianist, composer, and arranger
                    from Los Angeles.
                  </b>
                </h2>
                <p
                  style={{
                    color: "white",
                    fontFamily: "Georgia",
                    lineHeight: "2rem",
                    fontSize: "1em",
                  }}
                >
                  With a passion for film and mixed media, Marc has scored
                  Lifetime’s <b>Missing Twin</b>, short films <b>Stalling</b>,{" "}
                  <b>Shpilkes</b>, and <b>Scamper</b>, and more. His
                  professional work can be heard on Netflix’s animated{" "}
                  <b>Ridley Jones</b>, Hallmark’s romantic comedy{" "}
                  <b>A Paris Proposal</b>, and psychological horror film{" "}
                  <b>The Lift</b> amongst others. Marc specializes in his
                  diverse writing of different genres, from solo works to
                  orchestral, black metal to aleatoric contemporary, striving to
                  bring visual media to life.
                </p>
              </div>
              <img
                style={{ width: "100%", display: isMobile ? "" : "none" }}
                src={require("./marc_yu.jpeg")}
              />
            </Col>
          </Row>
          <div style={{ paddingTop: "5%" }}></div>
          <div
            style={{
              height: "3px",
              backgroundColor: "white",
              width: "100%",
            }}
          />
          <div style={{ paddingTop: "5%" }}></div>
          <Row>
            <Col>
              <Quote
                quote={
                  "That [Lang Lang] has served as a role model was evident not just in Mr. Yu's camera-ready tousled hair and his bright red socks, which peeked out from under crisp black trousers, but also in the way his torso swayed and his hands fluttered through the air as he and Mr. Lang played a clean, slightly demure account of Schubert's Rondo in A."
                }
                media={"The New York Times"}
                date={"October 2009"}
              />
              <Quote
                quote={
                  "To the uninitiated, a pianist of Yu's age presuming to play so subtle and complex a work…might seem a novelty. Marc Yu banished such thoughts with a passion and technical proficiency that belie his years."
                }
                media={"Press-Register"}
                date={"November 2008"}
              />
              <Quote
                quote={
                  "The well-traveled and accomplished…music star from Los Angeles, California entertained two local crowds, impressing with his old veteran-like piano-playing."
                }
                media={"Laredo Morning Times"}
                date={"May 2006"}
              />
            </Col>
            <Col>
              {" "}
              <Quote
                quote={
                  "The bonus of spending as long as I did writing about prodigies was getting to meet Marc at age 6 and being able to keep checking in until he was on the brink of applying to college. I'd never heard such a young child play so well, or seen a mix of high spirits and unrelenting industriousness like his."
                }
                media={
                  "Ann Hulbert, Interview for Off the Charts: The Hidden Lives and Lessons of American Child Prodigies"
                }
                date={"January 2018"}
              />
              <Quote
                quote={
                  "As one of the youngest musicians ever to appear at the Royal Albert Hall throughout the Proms' 114-year history, Marc was only too aware of the significance of the occasion. [His] precocious talent has earned him comparisons to Mozart…"
                }
                media={"Evening Standard"}
                date={"September 2008"}
              />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
        </Container>

        <MarcFooter />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
