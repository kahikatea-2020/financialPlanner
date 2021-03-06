import React, { Component } from 'react'
import './calculator.css'
import { Container, Button } from 'react-bootstrap'
class Calculator extends Component {

  state = {
    targetAmount: 0,
    rewardPercent: 0,
    initialAmount: 0,
    exposedBalance: 0,
    currentAmount: 0,
    editTA: false,
    editRP: false,
    editIA: false,
    editEB: false,
    finalCount: 0,
    exposedAsPercent: true
  }

  calculate = async () => {
    let count = 0
    if (this.state.targetAmount <= 0 || this.state.rewardPercent <= 0 || this.state.initialAmount <= 0 || this.state.exposedBalance <= 0) {
      return
    } else {
      await this.setState({ currentAmount: this.state.initialAmount })
      while (this.state.currentAmount < this.state.targetAmount) {
        await this.setState({ currentAmount: Number(this.state.currentAmount) + (this.state.exposedAsPercent ? (Number(this.state.exposedBalance) / 100) * Number(this.state.currentAmount) : Number(this.state.exposedBalance)) * (Number(this.state.rewardPercent) / 100) })
        count++
        console.log(count)
        console.log(this.state.currentAmount)
      }
    }

    await this.setState({ finalCount: count })
  }
  render() {
    return (
      <>
        <Container>
          <div className="calculatorContainer" style={{ marginTop: '50px' }}>
            <h1>Binary Options calculator</h1>

            <div className="calculatorInput">
              {this.state.editTA ? <button onClick={() => this.setState({ editTA: false })}>submit</button> : <button onClick={() => this.setState({ editTA: true })}>edit</button>}
              <p>Target Amount</p>
              {this.state.editTA ? <input type="number" placeholder="target amount" onChange={(evt) => {
                this.setState({ targetAmount: evt.target.value })
              }} /> : "$" + this.state.targetAmount}
            </div>
            <div className="calculatorInput">
              {this.state.editRP ? <button onClick={() => this.setState({ editRP: false })}>submit</button> : <button onClick={() => this.setState({ editRP: true })}>edit</button>}
              <p>Reward Percent</p>
              {this.state.editRP ? <input type="number" placeholder="reward percent" onChange={(evt) => {
                this.setState({ rewardPercent: evt.target.value })
              }} /> : this.state.rewardPercent + "%"}
            </div>
            <div className="calculatorInput">
              {this.state.editIA ? <button onClick={() => this.setState({ editIA: false })}>submit</button> : <button onClick={() => this.setState({ editIA: true })}>edit</button>}
              <p>Initial Amount</p>
              {this.state.editIA ? <input type="number" placeholder="initial amount" onChange={(evt) => {
                this.setState({ initialAmount: evt.target.value })
              }} /> : "$" + this.state.initialAmount}
            </div>
            <div className="calculatorInput">
              {this.state.editEB ? <button onClick={() => this.setState({ editEB: false })} style={{ marginRight: '20px' }}>submit</button> : <button onClick={() => this.setState({ editEB: true })} style={{ marginRight: '20px' }}>edit</button>}
              {this.state.exposedAsPercent ? <button onClick={() => this.setState({ exposedAsPercent: false })}>Expose as $</button> : <button onClick={() => this.setState({ exposedAsPercent: true })}>Expose as %</button>}
              <p>Exposed Balance</p>
              {this.state.editEB ? <input type="number" placeholder="exposed balance" onChange={(evt) => {
                this.setState({ exposedBalance: evt.target.value })
              }} /> : this.state.exposedAsPercent ? this.state.exposedBalance + "%" : "$" + this.state.exposedBalance}
            </div>
            <Button variant='dark' onClick={() => this.calculate()}>Calculate Amount of Remaining Successful Trades</Button>
            <h2>{this.state.finalCount + ' '} Sucessful Trades Remaining </h2>

          </div>
        </Container>

        <Container>
          <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <h1>How to Use this Calculator</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae obcaecati alias repudiandae commodi blanditiis a optio dolores inventore aut dolorem architecto eligendi, modi tempora est exercitationem quis et iusto non! Repudiandae earum magnam, nulla quaerat est, eum rerum sunt nesciunt vero praesentium perspiciatis deleniti cum tenetur. Aliquid, nemo deleniti distinctio autem, voluptate impedit molestias similique sequi minus eaque corporis obcaecati beatae eum ex error, quod magni quibusdam facere excepturi consequuntur dolor? Vero pariatur illo recusandae quam molestias neque sint nemo, itaque sed earum ullam voluptates. Libero consequuntur, veritatis error provident aperiam voluptatibus ab eveniet delectus est dicta atque officia enim!</p>
          </div>
        </Container>

      </>
    )
  }
}

export default Calculator