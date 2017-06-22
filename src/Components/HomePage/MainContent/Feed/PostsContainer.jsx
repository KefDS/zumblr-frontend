import React, { Component } from 'react'
import { connect } from 'react-redux'

import { API_URL } from '../../../../constants'

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
            author={user.username}
            hashtags={post.hashtags}
          >
            {post.text
              ? <PostText text={post.text} />
              : <img src={`${API_URL}/multimedia/${post.multimedia}`}
                alt='Heroku delete all the images 30 min after the last connection :-/'
              />
            }
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
