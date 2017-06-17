import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

const SiteNavbar = () => (
  <nav className='navbar navbar-default navbar-fixed-top navbar-custom'>
    <div className='container-fluid'>

      <div className='navbar-header'>
        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#menu' aria-expanded='false'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <a className='navbar-brand' href='#'><img src='/assets/img/tumblr_logo.png' alt='tumblr' /></a>
      </div>

      <div className='collapse navbar-collapse' id='menu'>

        <form className='navbar-form navbar-left'>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Search' />
          </div>
          <button type='submit' className='btn btn-default'>Submit</button>
        </form>

        <ul className='nav navbar-nav navbar-right'>
          <li><a href='#'>Link</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default SiteNavbar
