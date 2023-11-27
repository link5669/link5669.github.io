import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MarcNavbar = () => {
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    setCurrentPage(window.location.pathname);
    console.log(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <Navbar
      bg="black"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      sticky="top"
      style={{paddingTop: "1%"}}
    >
      <Container>
        <Navbar.Brand
          className="font"
          style={{
            fontSize: "2rem",
            paddingBottom: "2%",
          }}
          href="#home"
        >
          Marc Yu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link
                style={{
                  fontFamily: "Georgia",
                  color: "white",
                  textDecoration: "none",
                }}
                to="/"
              >
                <p className={currentPage === "/" ? "underline" : ""}>Home</p>
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-font" eventKey={2}>
              <Link
                style={{
                  fontFamily: "Georgia",
                  color: "white",
                  textDecoration: "none",
                }}
                to="/about"
              >
                <p className={currentPage === "/about" ? "underline" : ""}>
                  About
                </p>
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link
                style={{
                  fontFamily: "Georgia",
                  color: "white",
                  textDecoration: "none",
                }}
                to="/music"
              >
                <p className={currentPage === "/music" ? "underline" : ""}>
                  Music
                </p>
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link
                style={{
                  fontFamily: "Georgia",
                  color: "white",
                  textDecoration: "none",
                }}
                to="/credits"
              >
                <p className={currentPage === "/credits" ? "underline" : ""}>
                  Credits & Awards
                </p>
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link
                style={{
                  fontFamily: "Georgia",
                  color: "white",
                  textDecoration: "none",
                }}
                to="/contact"
              >
                <p className={currentPage === "/contact" ? "underline" : ""}>
                  Contact
                </p>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MarcNavbar;
