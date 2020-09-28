import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/auth'
class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Financial Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {this.props.userId ? <Nav.Link href="/#/profile">Profile</Nav.Link> : ''}
          </Nav>
          <Nav className="ml-auto">
            {this.props.userId ? <Button style={{ marginRight: "10px" }} variant="dark" onClick={() => {
              this.props.logout()
              location.replace('/#/')
              }}>Logout</Button> : <Link to='/login'><Button style={{ marginRight: "10px" }} variant="dark">Login</Button></Link>}
            <Link to='/register'><Button variant="outline-dark">Sign Up</Button></Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id
})

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)