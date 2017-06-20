function rootReducer (state = [], action) {
  let newState
  switch (action.type) {
    case 'SET_MY_POSTS':
      newState = setUserPosts(state, action.payload)
      break
    default:
      newState = state
  }
  return newState
}

function setUserPosts (state, posts) {
  return { ...state, userPosts: posts }
}

export default rootReducer
