function rootReducer (state = [], action) {
  let newState
  switch (action.type) {
    case 'SET_MY_POSTS':
      newState = { ...state, userPosts: action.payload }
      break
    case 'SET_USER':
      newState = { ...state, user: action.payload }
      break
    case 'LOGGED_IN':
      newState = { ...state, isLoggedIn: action.payload }
      break
    default:
      newState = state
  }
  return newState
}

export default rootReducer
