import API from '../../services/api'

function setUserPosts (userPosts) {
  return { type: 'SET_MY_POSTS', payload: userPosts }
}

export function getUserPosts (userID) {
  return (dispatch) => {
    API.getUserPost(userID)
      .then(data => dispatch(setUserPosts(data)))
      .catch(err => console.error(err))
  }
}
