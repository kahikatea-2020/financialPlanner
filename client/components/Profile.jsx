import React, {Component} from 'react'
import { connect } from 'react-redux'
class Profile extends Component {
  render () {
    return (
      <div>
        <h1>Welcome Home {this.props.fullName}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fullName: state.auth.user.fullName
})

export default connect(mapStateToProps)(Profile)