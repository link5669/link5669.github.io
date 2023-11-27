import "../App.css";
import "../Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MarcNavbar from "../components/Navbar";
import MarcFooter from "../components/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("alksjd")
    emailjs
      .sendForm(
        "service_hf61qgh",
        "template_olgmh6l",
        form.current,
        "kS8iWx3WR9GyvZWaN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = () => {};
  return (
    <>
      <div style={{ width: "100vw", background: "black" }}>
        <MarcNavbar />
        <br />
        <br />
        <Container>
          <form
            style={{ color: "white", padding: "10%", fontFamily: "Georgia" }}
            onSubmit={handleSubmit} ref={form}
          >
            <Container>
              <p style={{ fontFamily: "Georgia", paddingLeft: "0px" }}></p>
              <Row>
                <Col style={{ padding: "0px" }}>
                  <label htmlFor="first-name" >
                    First Name <span style={{ color: "gray" }}>(required)</span>
                  </label>

                  <input
                    style={{ borderRadius: "0px", paddingRight: "15px" }}
                    type="text"
                    className="form-control"
                    id="first-name"
                    name="user_name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col style={{ padding: "0px", paddingLeft: "15px" }}>
                  <label htmlFor="last-name">
                    Last Name
                  </label>

                  <input
                    type="text"
                    style={{ borderRadius: "0px" }}
                    className="form-control"
                    id="last-name"
                    name="last_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
            </Container>
            <div className="form-group" style={{ paddingTop: "1%" }}>
              <label htmlFor="email">Email</label>

              <input
                type="email"
                style={{ borderRadius: "0px" }}
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group" style={{ paddingTop: "1%" }}>
              <label htmlFor="message">Message</label>

              <textarea
                className="form-control"
                style={{ borderRadius: "0px" }}
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="2"
              />
            </div>
            <br />
            <input
              type="submit"
              style={{ borderRadius: "0px" }}
              value="Submit"
              onClick={sendEmail}
              className="btn btn-secondary"
            />
          </form>
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

export default Contact;
