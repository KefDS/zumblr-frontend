import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as loginCreators from '../../redux/actions/loginCreators'
import API from '../../services/api'

class LoginContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    // Bindings
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnChangeEmail (evt) {
    this.setState({
      email: evt.target.value
    })
  }

  handleOnChangePassword (evt) {
    this.setState({
      password: evt.target.value
    })
  }

  handleOnClick () {
    const { email, password } = this.state
    const { setUser, loggedIn } = this.props
    API.authUser(email, password)
      .then(data => {
        window.sessionStorage.setItem('token', data.token)
        setUser(data.user)
        loggedIn()
      })
      .catch(error => console.dir(error))
  }

  render () {
    const { isLoggedIn } = this.props

    const LoginPanel = (
      <section className='login__form'>
        <EmailInput handleOnChange={this.handleOnChangeEmail} />
        <PasswordInput handleOnChange={this.handleOnChangePassword} />
        <button onClick={this.handleOnClick}>Login</button>
      </section>
    )

    return isLoggedIn ? <Redirect to='/dashboard' /> : LoginPanel
  }
}

const EmailInput = ({ handleOnChange }) => (
  <input
    className='login-form__email'
    type='email'
    placeholder='Email'
    onChange={handleOnChange}
  />
)

const PasswordInput = ({ handleOnChange }) => (
  <input
    className='login-form__password'
    type='password'
    placeholder='Password'
    onChange={handleOnChange}
  />
)

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, loginCreators)(LoginContainer)
