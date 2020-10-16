import React, { Component } from 'react'
import { editOptionModal, editUserOption, setSelectedOption } from '../store/actions/binaryOptions'
import { connect } from 'react-redux'
import './addOptionModal.css'
import { Button } from 'react-bootstrap'
class EditOptionModal extends Component {

  state = {
    object: {
      targetAmount: 0,
      rewardPercent: 0,
      initialAmount: 0,
      exposedBalance: 0,
    } ,
    error: false
  }

  handleInput = (name, value) => {
    this.setState({ object: { ...this.state.object, [name]: Number(value) }}, () => {
      console.log(this.state);
    })
  }
  componentDidMount = () => {
    this.setState({
      object:{
        targetAmount: this.props.selected.targetAmount,
        rewardPercent: this.props.selected.rewardPercent,
        initialAmount: this.props.selected.initialAmount,
        exposedBalance: this.props.selected.exposedBalance,
        history: this.props.selected.history,
        currentAmount: this.props.selected.currentAmount
      }
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
              <h4>Target amount ($)</h4>
              <input value={this.state.object.targetAmount} name="targetAmount" type="number" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)}/>
            </div>
            <div className="inputContainer">
              <h4>Reward Percent (%)</h4>
              <input  value={this.state.object.rewardPercent} name="rewardPercent" type="number" placeholder="reward percent" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)}/>
            </div>
            <div className="inputContainer">
              <h4>Initial Amount ($)</h4>
              <input  value={this.state.object.initialAmount} name="initialAmount" type="number" placeholder="initial amount" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)} />
            </div>
            <div className="inputContainer">
              <h4>Exposed Balance ($)</h4>
              <input  value={this.state.object.exposedBalance} name="exposedBalance" type="number" placeholder="exposed balance" onChange={(evt) => this.handleInput(evt.target.name, evt.target.value)}/>
            </div>
          </div>
          {this.state.error && <p>You must fill in all the fields before updating the option.</p>}
          <Button className="modalButton" variant="dark" onClick={() => {


            
            let values = Object.values(this.state.object)
      
            // if user has not set a field don't update the option
            for(let i = 0; i < values.length; i++){
              if(values[i] === "0" || values[i] === "" || values[i] === 0){
                this.setState({error: true})
                return
              }
            }

            this.props.editUserOption({
              ...this.props.selected, ...this.state.object
            })
            this.props.editOptionModal(false)
            this.props.setSelectedOption({...this.state.object, id: this.props.selected.id, userId: this.props.userId})
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
    userId: state.auth.user.id,
    selected: state.binaryOptions.selected
  }
}
const mapDispatchToProps = {
  editOptionModal,
  editUserOption,
  setSelectedOption
}

export default connect(mapStateToProps, mapDispatchToProps)(EditOptionModal)