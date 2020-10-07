import React, { Component } from 'react'
import Calculator from './Calculator'
import './binaryOptions.css'
import { Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUserOptions } from '../store/actions/binaryOptions'
class BinaryOptions extends Component {
  state = {
    calculatorToggle: false,
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
            {this.props.options.length > 0 && this.props.options[0].map(option => {
              return <div>
                {option.targetAmount}
              </div>
            })}
          </div>
        </Container>

        {this.state.calculatorToggle && <Calculator />}

      </>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.binaryOptions.all);
  return ({
  id: state.auth.user.id,
  options: state.binaryOptions.all
  })
}
const mapDispatchToProps = {
  getUserOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(BinaryOptions)