import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Cart from './Cart';
import { NavLink } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link> {/* Add Home link */}
            <Nav.Link as={NavLink} to="/products">Store</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
          </Nav>
          <Cart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
