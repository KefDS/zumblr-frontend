import React from 'react'

import Feed from './Feed'
import SideBar from './Sidebar'

import './main.css'

const MainContent = (props) => (
  <div className='main'>
    <div className='container-fluid'>
      <div className='row'>
        <section className='col-md-offset-1 col-md-7'><Feed /></section>
        <aside className='col-md-3 visible-md-block visible-lg-block'><SideBar /></aside>
      </div>
    </div>
  </div>
)

export default MainContent
