import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as loginCreators from '../../redux/actions/loginCreators'
import API from '../../services/api'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isCredentialsIncorrect: false
    }

    // Bindings
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnChangeEmail(evt) {
    this.setState({
      email: evt.target.value
    })
  }

  handleOnChangePassword(evt) {
    this.setState({
      password: evt.target.value
    })
  }

  handleOnClick() {
    const { email, password } = this.state
    const { setUser, loggedIn } = this.props
    API.authUser(email, password)
      .then(data => {
        window.sessionStorage.setItem('token', data.token)
        setUser(data.user)
        loggedIn()
      })
      .catch(error => {
        console.error(error)
        this.setState({
          isCredentialsIncorrect: true
        })
      })
  }

  render() {
    const { isLoggedIn } = this.props
    console.log(this.state.isCredentialsIncorrect)

    const LoginPanel = (
      <section className='login__form'>
        <EmailInput handleOnChange={this.handleOnChangeEmail}
          incorrect={this.state.isCredentialsIncorrect} />
        <PasswordInput handleOnChange={this.handleOnChangePassword}
          incorrect={this.state.isCredentialsIncorrect} />
        <button onClick={this.handleOnClick}>Login</button>
      </section>
    )

    return isLoggedIn ? <Redirect to='/dashboard' /> : LoginPanel
  }
}

const EmailInput = ({ handleOnChange, incorrect }) => (
  <input
    className={'login-form__email' + (incorrect ? ' login-form__email--incorrect' : '')}
    type='email'
    placeholder='Email'
    onChange={handleOnChange}
  />
)

const PasswordInput = ({ handleOnChange, incorrect }) => (
  <input
    className={'login-form__password' + (incorrect ? ' login-form__password--incorrect' : '')}
    type='password'
    placeholder='Password'
    onChange={handleOnChange}
  />
)

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, loginCreators)(LoginContainer)
