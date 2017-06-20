import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './redux/store'
import initialState from './redux/initialState'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import App from './App'

// redux
const StoreInstance = Store(initialState)

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
)
