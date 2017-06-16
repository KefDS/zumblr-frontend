import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './Components/Login'
import { NotFound } from './Components/NotFound'

import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
