import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <form action="/api/users/login" method="post">
        <div>
          <label>Username:</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>
      </form>
    )
  }
}

export default Login