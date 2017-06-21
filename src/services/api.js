import Axios from 'axios'

import { API_URL } from '../constants'

let data = {
  apiURL: API_URL
}

const API = {
  getUserPosts (userID) {
    const header = { headers: { Authorization: `Bearer ${window.sessionStorage.getItem('token')}` } }
    const url = `${data.apiURL}/user/${userID}/posts`
    return Axios.get(url, header)
      .then(response => response.data)
  },

  authUser (email, password) {
    const url = `${data.apiURL}/login`
    return Axios.post(url, { email, password })
      .then(response => response.data)
  }
}

export default API
