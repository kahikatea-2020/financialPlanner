import React, { Component } from 'react'
import Calculator from './Calculator'
import './binaryOptions.css'
import { Button, Container } from 'react-bootstrap'
class BinaryOptions extends Component {
  state = {
    calculatorToggle: false,
  }
  componentDidMount = () => {
    
  }
  render() {
    return (
      <>
        <div className="binaryOptionsHeader">
          <h2>Manage Your Binary Options Trading</h2>
        </div>
        <Container style={{marginTop:'20px'}}>
          {!this.state.calculatorToggle? <Button className="binaryButtons" onClick = {()=> {
            this.setState({calculatorToggle: true})
          }}variant="outline-dark">Binary Options Calculator</Button>:<Button className="binaryButtons"onClick = {()=> {
            this.setState({calculatorToggle: false})
          }} variant="outline-danger">Close Calculator</Button> }
          <Button className="binaryButtons" variant="outline-dark">Add Option</Button>
          <Button className="binaryButtons" variant="outline-dark">Edit Option</Button>
          <Button className="binaryButtons" variant="outline-dark">Delete Option</Button>
          <div>
            <h1>Your Binary Options</h1>
          </div>
        </Container>

        {this.state.calculatorToggle && <Calculator />}

      </>
    )
  }
}

export default BinaryOptions