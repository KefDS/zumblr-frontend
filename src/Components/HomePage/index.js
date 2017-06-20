import React from 'react'

import SiteNavbar from './SiteNavbar/'
import MainContent from './MainContent'

const HomePage = () => (
  <div>
    <SiteNavbar />
    <MainContent />
  </div>
)

export default HomePage

// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// import * as postCreators from '../../redux/actions/postCreators'
// class HomePageContainer extends Component {
//   componentDidMount () {
//     const { getUserPosts, user } = this.props
//     getUserPosts(user.id)
//   }

//   render () {
//     return (
//       <div>{this.props.userPosts.map(post => <h1>{post.author}</h1>)}</div>
//     )
//   }
// }

// function mapStateToProps (state) {
//   return {
//     user: state.user,
//     userPosts: state.userPosts
//   }
// }

// export default connect(mapStateToProps, postCreators)(HomePageContainer)
