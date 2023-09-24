import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Cart from './Cart';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#">Ecommerce Website</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* Use 'mx-auto' class to center links */}
            <Nav.Link as={NavLink} to="/" exact className="nav-link">Store</Nav.Link> {/* Use NavLink for the Home link */}
            <Nav.Link as={NavLink} to="/about" className="nav-link">About Us</Nav.Link> {/* Use NavLink for the About Us link */}
          </Nav>
        </Navbar.Collapse>
        <Cart />
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
