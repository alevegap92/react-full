import React, { Component } from 'react'
import PropTypes from 'prop-types'
// subcomente
import Calculator from './Calculator'

class Navegation extends Component {
  static propTypes = {
    countTask: PropTypes.number,
  }

  static defaultProps = {
    countTask: 4,
  }

  constructor() {
    super() // Hereda todas las funcionalidades de React
    this.state = {
      count: 0,
    }
    this.handleCountClick = this.handleCountClick.bind(this)
  }

  /*
  componentDidMount() {
    this.setState({
      count: 1
    });
  }
*/
  handleCountClick(e) {
    if (e.target.id === 'add') {
      this.setState({
        count: this.state.count + 1,
      })
    } else if (e.target.id === 'subtrack' && this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      })
    } else {
      this.setState({
        count: 0,
      })
    }
  }

  render() {
    const { countTask } = this.props
    return (
      <nav className="navbar navbar-dark bg-dark ">
        <a className="navbar-brand" href="/">
          Tasks
          <span className="badge badge-pill badge-light ml-2 ">
            {countTask}
          </span>
        </a>
        <div>
          <button id="add" onClick={this.handleCountClick}>
            +
          </button>
          <button id="subtrack" onClick={this.handleCountClick}>
            -
          </button>
          <button id="result" onClick={this.handleCountClick}>
            =
          </button>
          <button>{this.state.count}</button>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <Calculator />
        </ul>
      </nav>
    )
  }
}

export default Navegation
