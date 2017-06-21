import React from 'react'
import { Link } from 'react-router-dom'

import navbarIcons from './navbarIcons'

import './bootstrap-navbar.css'
import './navbar.css'

const SiteNavbar = () => (
  <nav className='navbar navbar-default navbar-fixed-top'>
    <div className='navbar__wrapper'>
      <div className='container-fluid'>

        <div className='navbar-header'>
          <button type='button' className='navbar__button navbar-toggle collapsed' data-toggle='collapse' data-target='#menu' aria-expanded='false'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <Link to='/' className='navbar-brand'><img className='navbar__logo' src='/assets/img/tumblr_logo.png' alt='tumblr' /></Link>
        </div>

        <div id='menu' className='collapse navbar-collapse'>
          <div className='navbar-form navbar-left navbar__search-box'>
            <SearchBox />
          </div>
          <RightNavbarItems />
        </div>
      </div>
    </div>
  </nav>
)

const SearchBox = (props) => (
  <div className='navbar__search-icon'>
    <i className='glyphicon glyphicon-search' />
    <input type='search'
      className='form-control navbar__search-input'
      placeholder='Search Tumblr'
    />
  </div>
)

const RightNavbarItems = (props) => (
  <ul className='nav navbar-nav navbar-right navbar__right-icons'>
    {navbarIcons.map((navbarIcon, index) =>
      (<li key={index}>
        <NavbarIcon route='#' img={navbarIcon.path} alt={navbarIcon.alt} />
      </li>)
    )}
    <li><Link to='#'><img className='navbar__make-post' src='/assets/img/navbar/post.svg' alt='Make Post' /></Link></li>
  </ul>
)

const NavbarIcon = ({ route, img, alt }) => (
  <Link to={route}><img className='navbar__icon' src={img} alt={alt} /></Link>
)

export default SiteNavbar
