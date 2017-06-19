import React from 'react'
import { Link } from 'react-router-dom'

import navbarIcons from './navbarIcons'

import './bootstrap-navbar.css'
import './navbar.css'

const SiteNavbar = () => (
  <nav className='navbar navbar-default navbar-fixed-top'>
    <div className='container-fluid'>

      <div className='navbar-header'>
        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#menu' aria-expanded='false'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <Link to='/' className='navbar-brand'><img className='navbar__logo' src='/assets/img/tumblr_logo.png' alt='tumblr' /></Link>
      </div>

      <div id='menu' className='collapse navbar-collapse'>

        <form className='navbar-form navbar-left navbar__search-box'>
          {/* TODO: Find icon */}
          <button type='submit' className='navbar__search-btn'>:v</button>
          <input type='text' className='form-control navbar__search-input' placeholder='Search Tumblr' />
        </form>

        <ul className='nav navbar-nav navbar-right navbar__right-icons'>
          {navbarIcons.map((navbarIcon, index) =>
            (<li key={index}>
              <NavbarIcon route='#' img={navbarIcon.path} alt={navbarIcon.alt} />
            </li>)
          )}
        </ul>
      </div>
    </div>
  </nav>
)

const NavbarIcon = ({ route, img, alt }) => (
  <Link to={route}><img className='svg navbar__icon' src={img} /></Link>
)

export default SiteNavbar
