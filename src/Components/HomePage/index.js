import React from 'react'

import SiteNavbar from './SiteNavbar/'
import MainContent from './MainContent'

import NewPostModal from './Modal'

const HomePage = () => (
  <div>
    <NewPostModal />
    <SiteNavbar />
    <MainContent />
  </div>
)

export default HomePage
