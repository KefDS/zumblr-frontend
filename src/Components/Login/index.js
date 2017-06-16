import React from 'react'

import './login.css'

const Login = (props) => (
  <div className='login__bg'>
    <div className='login__content'>
      <LoginMainContent />
      <LoginOptions />
    </div>
  </div>
)

const LoginOptions = (props) => (
  <ul className='login__options'>
    <li>Teams</li>
    <li>Privacy</li>
    <li>Jobs</li>
    <li>Support</li>
  </ul>
)

const LoginMainContent = props => (
  <div className='login__main'>
    <img src='/assets/img/tumblr_logo_lg.png' alt='tumblr logo' />
    <div className='login__form'>
      <input type='text' placeholder='Email' />
      <button>Next</button>
    </div>
    <p className='login__signup'>Sign Up</p>
  </div>
)
export { Login }
