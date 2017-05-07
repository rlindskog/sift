import axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
	options.baseURL = `${process.env.API_URL}`
}
if (process.BROWSER_BUILD) {
	options.baseUrl = '/api'
}

export default axios.create(options)
