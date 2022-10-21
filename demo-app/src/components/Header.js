import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar className='navbaar' bg="primary" variant="dark">
        <Container className='container-nav'>
          <Navbar.Brand href="#home">Code for India</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </>
    )
}

export default Header