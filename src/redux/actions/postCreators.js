import API from '../../services/api'

function setUserPosts (userPosts) {
  return { type: 'SET_MY_POSTS', payload: userPosts }
}

export function getUserPosts (userID) {
  return (dispatch) => {
    API.getUserPosts(userID)
      .then(data => dispatch(setUserPosts(data)))
      .catch(err => console.error(err))
  }
}

export const addNewPost = (post) => {
  console.dir(post)
  return { type: 'ADD_NEW_POST', payload: post }
}
