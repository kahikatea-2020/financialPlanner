import React, { Component } from 'react'
import { editOptionModal, editUserOption } from '../store/actions/binaryOptions'
import { connect } from 'react-redux'
import './addOptionModal.css'
import { Button } from 'react-bootstrap'
class EditOptionModal extends Component {

  state = {
    targetAmount: 0,
    rewardPercent: 0,
    initialAmount: 0,
    exposedBalance: 0
  }

  handleInput = (name, value) => {
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div className="addOptionModal">
        <div className="addOptionModalInner">
          <h1>Edit Binary Option</h1>
          <div className="close-container closeButton" onClick={() => this.props.editOptionModal(false)}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
          </div>
          <div>
            <div className="inputContainer">
              <input name="targetAmount" type="number" placeholder="target amount" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)}/>
            </div>
            <div className="inputContainer">
              <input name="rewardPercent" type="number" placeholder="reward percent" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)}/>
            </div>
            <div className="inputContainer">
              <input name="initialAmount" type="number" placeholder="initial amount" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)} />
            </div>
            <div className="inputContainer">
              <input name="exposedBalance" type="number" placeholder="exposed balance" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)}/>
            </div>
          </div>
          <Button className="modalButton" variant="dark" onClick={() => {


            this.props.editOptionModal(false)
            this.props.editUserOption({
              ...this.state, userId: this.props.userId
            })
            
            }}>Finish Editing</Button>
          <Button className="modalButton" variant="danger" onClick={() => this.props.editOptionModal(false)}>Cancel</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    addOptionModal: state.binaryOptions.open,
    userId: state.auth.user.id
  }
}
const mapDispatchToProps = {
  editOptionModal,
  editUserOption
}

export default connect(mapStateToProps, mapDispatchToProps)(EditOptionModal)