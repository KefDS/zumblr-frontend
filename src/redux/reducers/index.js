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
      newState = { ...state, isLoggedIn: true }
      break
    case 'CLOSE_MODAL':
      newState = { ...state, isModalVisible: false }
      break
    case 'OPEN_MODAL':
      newState = { ...state, isModalVisible: true }
      break
    case 'SET_MODAL_TYPE':
      newState = { ...state, modalType: action.payload }
      break
    case 'ADD_NEW_POST':
      newState = { ...state, userPosts: [action.payload, ...state.userPosts] }
      break
    default:
      newState = state
  }
  return newState
}

export default rootReducer
