import React from 'react'

import Feed from './Feed'
import SideBar from './Sidebar'

import './main.css'

const MainContent = (props) => (
  <div className='main container-fluid'>
    <div className='row'>
      <section className='col-md-offset-1 col-md-7 col-sm-12'><Feed /></section>
      <aside className='col-md-offset-1 col-md-3 hidden-sm-down'><SideBar /></aside>
    </div>
  </div>
)

export default MainContent
