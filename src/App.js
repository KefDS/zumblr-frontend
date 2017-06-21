import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login'
import HomePage from './Components/HomePage'
import NotFound from './Components/NotFound'
import AuthChecker from './Components/Shared/AuthChecker'

import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <AuthChecker>
            <Route path='/dashboard' component={HomePage} />
          </AuthChecker>
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
