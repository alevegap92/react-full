// Dependencias
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import App from './components/App'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Page404 from './components/Page404'

const AppRouter = () => (
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>
)

export default AppRouter
