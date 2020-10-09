import React, { Component } from 'react'
import { addOptionModal } from '../store/actions/binaryOptions'
import { connect } from 'react-redux'
class AddOptionModal extends Component {
  render() {
    return (
      <div>
        Modal
        <button onClick={() => this.props.addOptionModal(false)}>Close</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    addOptionModal: state.binaryOptions.open
  }
}
const mapDispatchToProps = {
  addOptionModal
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOptionModal)