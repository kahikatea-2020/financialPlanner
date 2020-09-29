import React, { Component } from 'react'
import Calculator from './Calculator'
import './binaryOptions.css'
class BinaryOptions extends Component {
  render() {
    return (
      <>
        <div className="binaryOptionsHeader">
          <h2>Manage Your Binary Options Trading</h2>
        </div>
        <Calculator />
      </>
    )
  }
}

export default BinaryOptions