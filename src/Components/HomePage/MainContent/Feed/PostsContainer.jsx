import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as postCreators from '../../../../redux/actions/postCreators'

import Post from './Post'

class PostsContainer extends Component {
  componentDidMount () {
    const { getUserPosts, user } = this.props
    getUserPosts(user.id)
  }

  render () {
    const { userPosts, user } = this.props
    return (
      <div>
        {userPosts.map(post => (
          <Post
            author={user.name}
            hashtags={post.hashtags}
          >
            {/* TODO: Image or text */}
            <PostText text={post.text} />
          </Post>
        ))}
      </div>
    )
  }
}

const PostText = ({ text }) => (
  <p>
    {text.split('\n').map((paragh, key) => (
      <span key={key}>{paragh}<br /></span>
    ))}
  </p>
)

function mapStateToProps (state) {
  return {
    user: state.user,
    userPosts: state.userPosts
  }
}

export default connect(mapStateToProps, postCreators)(PostsContainer)
