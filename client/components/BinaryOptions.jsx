import React, { Component } from 'react'

import Calculator from './Calculator'
import AddOptionModal from './AddOptionModal'
import EditOptionModal from './EditOptionModal'

import './binaryOptions.css'
import { Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

import {
  getUserOptions,
  addOptionModal,
  setSelectedOption,
  deleteUserOption,
  editOptionModal,
  editUserOption
} from '../store/actions/binaryOptions'

class BinaryOptions extends Component {
  state = {
    calculatorToggle: false
  }
  componentDidMount = () => {
    // console.log(this.props.options)
    this.props.getUserOptions(this.props.id)
  }

  simulateWin = (option) => {

    let newOption = option
    //add rewardPercent*exposedBalance to current amount
    newOption.currentAmount = Number(newOption.currentAmount) + (Number(newOption.rewardPercent)/100)*Number(newOption.exposedBalance)

    // add new trade to array
    newOption.history.push(newOption.currentAmount)
    // update database and redux store
    this.props.editUserOption(newOption)
  }

  simulateLoss = (option) => {
    let newOption = option
    //subtract exposed balance from current amount
    newOption.currentAmount = Number(newOption.currentAmount) - Number(newOption.exposedBalance)
    // add new trade to array
    newOption.history.push(newOption.currentAmount)
    // update database and redux store
    this.props.editUserOption(newOption)
  }

  render() {
    // console.log(this.props.options);

    return (
      <>
        <div className="binaryOptionsHeader">
          <h2>Manage Your Binary Options Trading</h2>
        </div>
        {this.state.calculatorToggle && <Calculator />}
        {this.props.addOptionModalState && <AddOptionModal />}
        {this.props.editOptionModalState && <EditOptionModal />}

        <Container style={{ marginTop: '20px' }}>
          <div className="binaryButtonsContainer">
            {!this.state.calculatorToggle ?

              <Button className="binaryButtons" onClick={() => {
                this.setState({ calculatorToggle: true }, () => {
                  document.getElementsByClassName("calculatorContainer")[0].scrollIntoView()
                })

              }} variant="outline-dark">Binary Options Calculator</Button>

              :

              <Button className="binaryButtons" onClick={() => {
                this.setState({ calculatorToggle: false })
              }} variant="outline-danger">Close Calculator</Button>}

            <Button className="binaryButtons" variant="outline-dark" onClick={() => this.props.addOptionModal(true)}>Add Option</Button>
            <Button className="binaryButtons" variant="outline-dark" onClick={() => this.props.selected && this.props.editOptionModal(true)}>Edit Option</Button>
            <Button className="binaryButtons" variant="outline-dark" onClick={() => this.props.deleteUserOption(this.props.selected.id)}>Delete Option</Button>
          </div>


          <div>
            <h1>Your Binary Options</h1>
            {this.props.options && this.props.options.map(option => {

              let history = option.history

              if(typeof history === "string"){
                history = JSON.parse(history)
              }

              let data = history && history.map((number, index) => {
                return {
                  name: "Trade #" + index.toString(),
                  value: number
                }
              })

              return <div className={`binaryOption ${this.props.selected && this.props.selected.id === option.id ? 'selected' : ''}`} onClick={() => this.props.setSelectedOption(option)}>
                <h4>Target Amount</h4>
                <p> ${option.targetAmount}</p>
                <h4>Reward Percent</h4>
                <p>{option.rewardPercent}%</p>
                <h4>Initial Amount</h4>
                <p>${option.initialAmount}</p>
                <h4>Exposed Balance</h4>
                <p>${option.exposedBalance}</p>
                <h4>Current Balance</h4>
                <p>${option.currentAmount}</p>
                <Button onClick = {() => this.simulateWin(option)} style={{ marginRight: "5px", marginBottom: "20px"}} variant="success">Simulate Win</Button>
                <Button onClick = {() => this.simulateLoss(option)} style={{ marginRight: "5px", marginBottom: "20px"}} variant="danger">Simulate Loss</Button>
                <LineChart width={1000} height={250} data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />

                </LineChart>
              </div>
            })}
          </div>
        </Container>



      </>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return ({
    id: state.auth.user.id,
    options: state.binaryOptions.all,
    addOptionModalState: state.binaryOptions.open,
    editOptionModalState: state.binaryOptions.editOpen,
    selected: state.binaryOptions.selected
  })
}
const mapDispatchToProps = {
  getUserOptions,
  addOptionModal,
  setSelectedOption,
  deleteUserOption,
  editOptionModal,
  editUserOption
}

export default connect(mapStateToProps, mapDispatchToProps)(BinaryOptions)