import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as loginCreators from '../../redux/actions/loginCreators'
import Api from '../../services/api'

class LoginContainer extends Component {
  constructor (props) {
    super(props)
    this.email = ''
    this.password = ''
    this.emailIsValid = null

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
    Api.authUser(email, password)
      .then(data => { console.dir(data); this.props.setUser(data) })
      .catch(error => console.error(error))
  }

  render () {
    return (
      <section className='login__form'>
        <EmailInput handleOnChange={this.handleOnChangeEmail} />
        <PasswordInput handleOnChange={this.handleOnChangePassword} />
        <button onClick={this.handleOnClick}>Next</button>
      </section>
    )
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

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps, loginCreators)(LoginContainer)
