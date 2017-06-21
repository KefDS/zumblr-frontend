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
}

export default new Api(API_SERVER)
