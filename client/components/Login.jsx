import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authUser } from '../store/actions/auth'
class Logins extends Component {

  state = {
    email: '',
    password: '',
    err: null
  }
  handleClick = async () => {

     try {
      await this.props.authUser({ email: this.state.email, password: this.state.password })
      location.replace("/#/profile")
    } catch (err) {
      this.setState({ err })
    }
  }

  render() {
    return (
      <div>
        <input type="email" placeholder="email" onChange={(evt) => {

          this.setState({ email: evt.target.value })

        }} />
        <input type="password" placeholder="password" onChange={(evt) => {

          this.setState({ password: evt.target.value })

        }} />
        <button onClick={() => this.handleClick()}>Log In</button>
        <p>{this.state.err && this.state.err.message}</p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authUser: (user) => dispatch(authUser(user))
  }
}

export default connect(undefined, mapDispatchToProps)(Logins)