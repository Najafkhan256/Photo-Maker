import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../../../uploads/photo-logo-2.png";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      className="navbar_bg"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand to="/">
            <img src={Logo} alt="Logo" className="img-fluid logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="" style={{ marginLeft: "auto" }}>
            <LinkContainer className="nav-link" to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer className="nav-link" to="/pricing">
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
            <LinkContainer className="nav-link" to="/landing">
              <Nav.Link>Landing</Nav.Link>
            </LinkContainer>
            <LinkContainer className="nav-link" to="/sellers">
              <Nav.Link>Sellers</Nav.Link>
            </LinkContainer>
            <LinkContainer className="nav-link" to="/about-us">
              <Nav.Link>about</Nav.Link>
            </LinkContainer>
            <LinkContainer className="nav-link" to="/categories">
              <Nav.Link>Categories</Nav.Link>
            </LinkContainer>
            <LinkContainer className="nav-link" to="/contact-us">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer className="nav-link" to="/">
              <Nav.Link>
                <FaShoppingCart />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
