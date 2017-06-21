import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AuthChecker extends Component {
  componentDidMount () {
    const { isLoggedIn, history } = this.props
    if (!isLoggedIn) {
      history.push('/')
    }
  }

  render () {
    const { isLoggedIn, children } = this.props
    console.log(isLoggedIn)
    return isLoggedIn ? (<div>{children}</div>) : null
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

export default withRouter(connect(mapStateToProps)(AuthChecker))
