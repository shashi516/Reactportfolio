import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {

  return (
    <div>
       <Navbar expand="lg" style={{border:".1px solid gray", borderLeft:"0px", borderRight:"0px" }}>
      <Container>
        <Navbar.Brand href="/" id='port'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link id='nav' href="/">Bio</Nav.Link>
            <Nav.Link id='nav' href="/about">AboutUS</Nav.Link>
            <Nav.Link id='nav' href="/project">Projects</Nav.Link>
            <Nav.Link id='nav' href="/contact">Contact-me</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars
