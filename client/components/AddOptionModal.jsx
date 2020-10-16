import React, { Component } from 'react'
import { addOptionModal, addUserOptions } from '../store/actions/binaryOptions'
import { connect } from 'react-redux'
import './addOptionModal.css'
import { Button } from 'react-bootstrap'
class AddOptionModal extends Component {

  state = {
    object: {
      targetAmount: 0,
      rewardPercent: 0,
      initialAmount: 0,
      exposedBalance: 0,
    },
    error: false
  }

  handleInput = (name, value) => {
    this.setState({ object: {...this.state.object, [name]: value }}, () => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div className="addOptionModal">
        <div className="addOptionModalInner">
          <h1>Add Binary Option</h1>
          <div className="close-container closeButton" onClick={() => this.props.addOptionModal(false)}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
          </div>
          <div>
            <div className="inputContainer">
              <input name="targetAmount" type="number" placeholder="target amount" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)} />
            </div>
            <div className="inputContainer">
              <input name="rewardPercent" type="number" placeholder="reward percent" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)} />
            </div>
            <div className="inputContainer">
              <input name="initialAmount" type="number" placeholder="initial amount" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)} />
            </div>
            <div className="inputContainer">
              <input name="exposedBalance" type="number" placeholder="exposed balance" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)} />
            </div>
          </div>
          {this.state.error && <p>You must fill in all the fields before submitting.</p>}
          <Button className="modalButton" variant="dark" onClick={() => {

            let values = Object.values(this.state.object)

            // if user has not set a field don't update the option
            for (let i = 0; i < values.length; i++) {
              if (values[i] === "0" || values[i] === "" || values[i] === 0) {
                this.setState({ error: true })
                return
              }
            }
            this.props.addOptionModal(false)
            this.props.addUserOptions({
              ...this.state.object, userId: this.props.userId, currentAmount: this.state.object.initialAmount, history: [Number(this.state.initialAmount)]
            })

          }}>Add Binary Option</Button>
          <Button className="modalButton" variant="danger" onClick={() => this.props.addOptionModal(false)}>Cancel</Button>
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
  addOptionModal,
  addUserOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOptionModal)