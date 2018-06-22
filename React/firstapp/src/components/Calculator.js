import React, { Component } from 'react'

class Calculator extends Component {
  constructor () {
    super() // Hereda todas las funcionalidades de React
    this.state = {// ve los estados de los componentes
      number1: 0,
      number2: 0,
      result: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleResultClick = this.handleResultClick.bind(this)
  }

  handleInputChange (e) {
    if (e.target.id === 'number1') {
      this.setState({
        number1: Number(e.target.value)
      })
    } else if (e.target.id === 'number2') {
      this.setState({
        number2: Number(e.target.value)
      })
    }
  }
  handleResultClick () {
    this.setState({
      result: this.state.number1 + this.state.number2
    })
  }

  render () {
    return (
      <div>
        <button type='button' className='btn btn-primary' data-toggle='modal' data-target='#myModal'>
          Calculadora
        </button>

        <div className='modal fade' id='myModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLongTitle'>Calculador</h5>
              </div>
              <div className='modal-body'>
                <input id='number1' type='number' value={this.state.number1} onChange={this.handleInputChange} />
                <input id='number2' type='number' value={this.state.number2} onChange={this.handleInputChange} />
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
                <button id='result' onClick={this.handleResultClick}>Resultado</button>
                {this.state.result} 
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Calculator
