import React, { Component } from 'react'

import Calculator from './Calculator'
import AddOptionModal from './AddOptionModal'

import './binaryOptions.css'
import { Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import {
  getUserOptions,
  addOptionModal,
  setSelectedOption
} from '../store/actions/binaryOptions'

class BinaryOptions extends Component {
  state = {
    calculatorToggle: false
  }
  componentDidMount = () => {
    console.log(this.props.options)
    this.props.getUserOptions(this.props.id)
  }
  render() {
    console.log(this.props.options);
    return (
      <>
        <div className="binaryOptionsHeader">
          <h2>Manage Your Binary Options Trading</h2>
        </div>
        {this.state.calculatorToggle && <Calculator />}
        {this.props.addOptionModalState && <AddOptionModal />}
        <Container style={{ marginTop: '20px' }}>

          {!this.state.calculatorToggle ?

            <Button className="binaryButtons" onClick={() => {
              this.setState({ calculatorToggle: true })
            }} variant="outline-dark">Binary Options Calculator</Button>

            :

            <Button className="binaryButtons" onClick={() => {
              this.setState({ calculatorToggle: false })
            }} variant="outline-danger">Close Calculator</Button>}

          <Button className="binaryButtons" variant="outline-dark" onClick={() => this.props.addOptionModal(true)}>Add Option</Button>
          <Button className="binaryButtons" variant="outline-dark">Edit Option</Button>
          <Button className="binaryButtons" variant="outline-dark">Delete Option</Button>

          <div>
            <h1>Your Binary Options</h1>
            {this.props.options && this.props.options.map(option => {
              return <div className={`${this.props.selected === option.id ? 'selected' : ''}`} onClick={() => this.props.setSelectedOption(option.id)}>
                {option.targetAmount}
              </div>
            })}
          </div>
        </Container>



      </>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return ({
    id: state.auth.user.id,
    options: state.binaryOptions.all,
    addOptionModalState: state.binaryOptions.open,
    selected: state.binaryOptions.selected
  })
}
const mapDispatchToProps = {
  getUserOptions,
  addOptionModal,
  setSelectedOption
}

export default connect(mapStateToProps, mapDispatchToProps)(BinaryOptions)