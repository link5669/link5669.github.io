import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MarcNavbar from "../components/Navbar";
import MarcFooter from "../components/Footer";
import { Link } from "react-router-dom";
import Album from "../components/Album";
import shp from "../assets/shp.jpeg";
import bard1 from "../assets/DND+NRS+Album+Cover.png";
import bard2 from "../assets/DND+ELM+Album+Cover.jpeg";
import stalling from "../assets/STL+Album+Cover.png";
import missingTwin from "../assets/HMT+Album+Cover.jpg";
import alistair from "../assets/BXR+Album+Cover.jpg";

function Music() {
  return (
    <>
      <div style={{ width: "100vw", background: "black" }}>
        <MarcNavbar />
        <br />
        <br />
        <Container>
          <Row>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "Georgia",
              }}
            >
              <i>
                Interested in music for your project?{" "}
                <Link style={{ color: "grey" }} to="/contact">
                  Send a message
                </Link>{" "}
                to request a custom demo reel!
              </i>
            </p>
            <Col style={{ padding: "3%", paddingLeft: "8%" }}>
              <Album
                id="shp"
                img={shp}
                file={"none"}
                title="Shpilkes Preview"
                description="Short Film / Psychological Thriller"
                info={[
                  {
                    title: "Shpilkes Preview",
                  },
                ]}
              />
              <Album
                img={bard2}
                title="A Bard’s Tale: The Plane of Elemental Chaos Vol. 1"
                description="Library Music / Contemporary"
              />
            </Col>
            <Col style={{ padding: "3%" }}>
              <Album
                id="bard1"
                img={bard1}
                file={"none"}
                title="A Bard’s Tale: Norse Vol. 1"
                description="Library Music / Norse, Folk, Metal"
                info={[
                  {
                    title: "A Bard’s Tale: Norse Vol. 1",
                  },
                ]}
              />
              <Album
                img={missingTwin}
                title="Missing Twin"
                description="Feature Film / Drama, Thriller"
              />
            </Col>
            <Col style={{ padding: "3%", paddingRight: "8%" }}>
              <Album
                id="stalling"
                img={stalling}
                file={"none"}
                title="Stalling"
                description="Short Film / Musical Comedy"
                info={[
                  {
                    title: "Stalling",
                  },
                ]}
              />
              <Album
                img={alistair}
                title="Alistair"
                description="Video Game / Horror, Electronic"
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
            <Col></Col>
            <Col></Col>
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

export default Music;
