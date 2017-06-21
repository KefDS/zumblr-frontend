export function setUser (user) {
  return { type: 'SET_USER', payload: user }
}

export function loggedIn () {
  return { type: 'LOGGED_IN', payload: true }
}
