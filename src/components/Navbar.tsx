import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="navbar-color">
      <Navbar.Brand href="#home" className="navbar-color">
        BrandName
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="navbar-color">
            Home
          </Nav.Link>
          <Nav.Link href="#services" className="navbar-color">
            Services
          </Nav.Link>
          <Nav.Link href="#contact" className="navbar-color">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
