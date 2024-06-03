import React from "react";

// import Seo from "../shared/Seo";
// import Navbar from "../components/Navbar"
import { Nav, Navbar } from "react-bootstrap";

function Navvbar() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" className="top_nav">
        {/* <Container> */}
        <Navbar.Brand href="/">
          <img src="./assets/Logo.svg" alt="logo" className="lolalogo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="balance">
            <Nav.Link href="#pricing">Home</Nav.Link>
            {/* <Nav.Link href="#pricing">About</Nav.Link> */}
            <Nav.Link href="https://www.instagram.com/_darkoskydesign_?igsh=eG1qeml0MGRrczJy">
              Gallery
            </Nav.Link>

            <Nav.Link href="./q1">
              {" "}
              <button className="action-but"> Get a quote</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </React.Fragment>
  );
}

export default Navvbar;
