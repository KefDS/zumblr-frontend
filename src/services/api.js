import Axios from 'axios'

import { API_URL } from '../constants'

let data = {
  apiURL: API_URL
}

const API = {
  getAuthHeader () {
    return {
      headers:
      { Authorization: `Bearer ${window.sessionStorage.getItem('token')}` }
    }
  },

  getUserPosts (userID) {
    const url = `${data.apiURL}/user/${userID}/posts?sort=createdAt%20DESC`
    return Axios.get(url, this.getAuthHeader())
      .then(response => response.data)
  },

  authUser (email, password) {
    const url = `${data.apiURL}/login`
    return Axios.post(url, { email, password })
      .then(response => response.data)
  },

  saveTextPost (newPost) {
    const url = `${data.apiURL}/post`
    return Axios.post(url, newPost, this.getAuthHeader())
      .then(response => response.data)
  },

  saveMultimediaFile (fileData) {
    const customHeader = this.getAuthHeader()
    console.dir(customHeader)
    const url = `${data.apiURL}/multimedia`
    return Axios.post(url, fileData, this.getAuthHeader())
      .then(response => response.data)
  }
}

export default API
