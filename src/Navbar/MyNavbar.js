import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Cart from '../Store/Cart';
import { NavLink } from 'react-router-dom';
import AuthContext from '../Authentication/AuthContext'; 

function MyNavbar() {
  const authCtx = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='mb-1'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" >HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/products">STORE</Nav.Link>
            <Nav.Link as={NavLink} to="/about">ABOUT US</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">CONTACT US</Nav.Link>
            {authCtx.isLoggedIn ? ( 
              <Nav.Link as={NavLink} to="/login" onClick={authCtx.logout}>LOGOUT</Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/login">LOGIN</Nav.Link>
            )}
          </Nav>
          <Cart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
