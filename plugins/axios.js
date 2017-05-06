import axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
  options.baseURL = `${process.env.API_URL}`
  // options.headers = { 'Content-Type': 'application/json' }
}

export default axios.create(options)
