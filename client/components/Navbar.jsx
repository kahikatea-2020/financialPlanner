import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Link to='/login'><Button style={{marginRight:"10px"}} variant="dark">Login</Button></Link>
            <Link to='/signup'><Button variant="outline-dark">Sign Up</Button></Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent