// Dependencias
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
// assets
import './index.css'
// Router
import AppRouter from './routes'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
