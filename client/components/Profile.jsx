import React, { Component } from 'react'
import { connect } from 'react-redux'
import './profile.css'
import { Container, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
class Profile extends Component {
  render() {
    return (
      <>
        <div className="profileHeader">
          <h2>Welcome Home {this.props.fullName}</h2>
        </div>
        <Container style={{marginTop:'50px'}}>
          <h1>HOME</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <Link to='/binaryOptions'><Button variant="outline-dark" style={{marginRight:'20px', marginTop:'20px'}}>BINARY OPTIONS</Button></Link>
          <Link to='/financialGoals'><Button variant="outline-dark" style={{marginTop:'20px'}}>FINANCIAL GOALS</Button></Link>
        </Container>

      </>
    )
  }
}

const mapStateToProps = (state) => ({
  fullName: state.auth.user.fullName
})

export default connect(mapStateToProps)(Profile)