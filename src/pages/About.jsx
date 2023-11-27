import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MarcNavbar from "../components/Navbar";
import MarcFooter from "../components/Footer";

function About() {
  return (
    <>
      <div style={{ width: "100vw", background: "black" }}>
        <MarcNavbar />
        <br />
        <br />
        <Container>
          <Row>
            <div className="textbox">
              <img
                src={require("../back.jpg")}
                align="right"
                style={{ width: "50vw", float: "right", padding: "30px", paddingTop: "0px" }}
              />
              <h2 className="subheadTwo">About Marc Yu</h2>

              <p
                style={{
                  color: "white",
                  fontFamily: "Georgia",
                  lineHeight: "2rem",
                  fontSize: "1.1rem",
                }}
              >
                Born in California, Marc has toured as a concert pianist and
                made media appearances including <b>The Tonight Show</b>,{" "}
                <b>The Oprah Winfrey Show</b>, and{" "}
                <b>The Ellen DeGeneres Show</b>, becoming the focus of print
                media worldwide including cover stories for both{" "}
                <b>The L.A. Times</b> and <b>The New York Times Magazine</b>. In
                2006, he inaugurated{" "}
                <b>Steinway & Sons' Historical Piano Tour</b>, performing on
                Vladimir Horowitz's piano. <br />
                <div style={{ height: "20px" }} />
                Marc has performed at festivals and on television
                internationally, has been featured in multiple documentaries,
                including <b>National Geographic's My Brilliant Brain</b>, and
                is the subject of multiple books:{" "}
                <b>NY Times Best Seller Far From The Tree</b> by Andrew Solomon
                and <b>Off the Charts by Ann Hulbert</b>. Marc has also
                performed with acclaimed pianist Lang Lang at the
                <b>
                  GRAMMY Salute To Classical Music at Walt Disney Concert Hall
                </b>
                ,<b> the BBC Proms at the Royal Albert Hall</b>, and{" "}
                <b>Carnegie Hall</b>. <br />
                <div style={{ height: "20px" }} />
                Combining performance with charity work, Marc has raised money
                to build schools in rural areas of China; for victims of the
                Sichuan earthquake and Hurricane Katrina; for the Lupus
                Foundation in California; and for Doctors Without Borders to
                help children with heart defects. As a speaker and educator,
                Marc has also performed and spoken at the{" "}
                <b>Bi-Annual US-China Strategic Economic Dialogue</b> for the US
                and Chinese Cabinets, the
                <b> SENG Annual Conference</b>, <b>TEDx</b>, and the{" "}
                <b>IdeaFestival</b> in Kentucky. <br />
                <div style={{ height: "20px" }} />
                Since studying with Professor Li Min Duo at the{" "}
                <b>Shanghai Conservatory of Music</b> and graduating from{" "}
                <b>Berklee College of Music</b>, Marc has scored{" "}
                <b>Lifetime's Missing Twin</b>, short films
                <b> Stalling</b>, <b>Shpilkes</b>, and <b>Scamper</b>, and more.
                His professional work can also be heard on{" "}
                <b>Netflix's animated series Ridley Jones</b>,
                <b> Hallmark's A Paris Proposal</b> and{" "}
                <b>A Very Venice Romance</b>, and psychological horror film{" "}
                <b>The Lift</b> amongst others. In 2020, Marc co-founded{" "}
                <b>Game Audio Workshop</b>, an organization dedicated to
                bringing educational game development opportunities to game
                audio students, co-organizing the annual <b>Game/Music Jam</b>{" "}
                and <b>Game Music and Audio Conference</b>. Marc is also a
                winner of the <b>Curtain Up</b> musical theater competition, and
                the recipient of the
                <b> Recognition of Leadership in Screen Scoring Award</b>,{" "}
                <b>Davidson Fellows Award</b>,{" "}
                <b>Young Steinway Artist Award</b>, and the{" "}
                <b>Innovation Award at the World Summit on Innovation</b>,
                alongside Bill Gates, Stephen Hawking, and Snarky Puppy. <br />
                <div style={{ height: "20px" }} />
                Marc Yu holds a Bachelor of Music in Film and Interactive Media
                Scoring and is an avid composer, arranger, and educator. His
                favorite video games are Minecraft, Baldur's Gate 3, and Portal
                2 (as of September, 2023).
              </p>
            </div>
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

export default About;
