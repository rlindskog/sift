require('dotenv').config()

module.exports = {
	css: [
  	'assets/main.css',
  	'assets/normalize.css'
  ],
  build: {
    vendor: ['axios']
  },
  env: {
  	HOST: '127.0.0.1',
		PORT: 3000,
		URL: 'http://127.0.0.1:3000',

		API_HOST: '127.0.0.1',
		API_PORT: 3000,
		API_URL: 'http://127.0.0.1:3000/api'
  }
}