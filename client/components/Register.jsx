import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newUser } from '../store/actions/auth'

class Register extends Component {
  state = {
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    err: null
  }
  render() {
    return (
      <div>
        <input type="email" placeHolder="email" onChange={(evt) => this.setState({ email: evt.target.value })} />
        <input type="text" placeHolder="full name" onChange={(evt) => this.setState({ fullName: evt.target.value })} />
        <input type="password" placeHolder="password" onChange={(evt) => this.setState({ password: evt.target.value })} />
        <input type="password" placeHolder="confirm password" onChange={(evt) => this.setState({ confirmPassword: evt.target.value })} />
        <button onClick={async () => {

          try {
            await this.props.newUser({
              email: this.state.email,
              fullName: this.state.fullName,
              password: this.state.password,
              confirmPassword: this.state.confirmPassword
            }) 

            location.replace('/#/profile')

          } catch (err) {
            this.setState({ err: err.message })
          }





        }}>Sign Up</button>
        <p>{this.state.err}</p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  newUser: (user) => dispatch(newUser(user))
})

export default connect(undefined, mapDispatchToProps)(Register)