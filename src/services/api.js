import Axios from 'axios'

import { API_SERVER } from '../constants'

class Api {
  constructor (APIServer) {
    this.apiServer = API_SERVER
  }

  getUserPost (userID) {
    const url = `${this.apiServer}/user/${userID}/posts`
    return Axios.get(url).then(response => response.data)
  }

  checkEmail (email) {
    const url = `${this.apiServer}/user/email`
    const params = `?email=${email}`
    return Axios.get(url + params).then(response => response.data)
  }

  authUser (email, password) {
    const url = `${this.apiServer}/login`
    return Axios.post(url, { email, password }).then(response => response.data)
  }
}

export default new Api(API_SERVER)
