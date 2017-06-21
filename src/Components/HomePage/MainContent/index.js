import React from 'react'

import Feed from './Feed'
import SideBar from './Sidebar'

import './main.css'

const MainContent = (props) => (
  <div className='main'>
    <div className='container-fluid'>
      <div className='row'>
        <section className='col-md-offset-1 col-md-7 col-sm-12'><Feed /></section>
        <aside className='col-md-4 hidden-sm-down'><SideBar /></aside>
      </div>
    </div>
  </div>
)

export default MainContent
