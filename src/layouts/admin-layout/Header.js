import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link > <NavLink to="">Home</NavLink></Nav.Link>
            <Nav.Link> <NavLink to="/my-user-list">My User List</NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header