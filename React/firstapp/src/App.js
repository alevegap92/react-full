import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import './App.css'

import todosData from './todos.json'
// subcomponents
import TodoForm from './components/TodoForms'
import Navegation from './components/Navigation'


const TodoList = ({ todos, handleremoveTodo }) =>
  todos.map(todo => {
    const getBadgeContext = () => {
      switch (todo.priority) {
      case "low":
          return 'badge-success'   
      case "medium":
        return 'badge-warning'
      case "high":
        return 'badge-danger'
      default :
        return 'badge-default'
    }}

    return (
      <div key={todo.id} className="card-deck col-md-4">
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title text-center">{todo.title}</h5>
            <span className={`badge badge-pill ${getBadgeContext()} ml-2`}>
              {todo.priority}
            </span>
            <p className="card-text">{todo.description} </p>
            <p>
              <mark>{todo.responsible}</mark>
            </p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={() => handleremoveTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  })

TodoList.propTypes = {
  handleremoveTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      responsible: PropTypes.string,
      description: PropTypes.string,
      priority: PropTypes.string,
    })
  ),
}

class App extends Component {
  constructor(props) {
    super(props) // Hereda todas las funcionalidades de React
    this.state = {
      todos: todosData,
    } // ve los estados de los componentes
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleremoveTodo = this.handleremoveTodo.bind(this)
  } // map() recorre uno a uno cada tarea

  handleremoveTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    }) // reject.((todo) => todo.id === id
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    })
  }

  render() {
    return (
      <div className="App">
        <Navegation countTask={this.state.todos.length} />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>

            <div className="col-md-8">
              <div className="row">
                <TodoList
                  todos={this.state.todos}
                  handleremoveTodo={this.handleremoveTodo}
                />
              </div>
            </div>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default App
