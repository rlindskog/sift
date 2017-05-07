require('dotenv').config()

module.exports = {
	head: {
		link: [
			{ href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons', rel: 'stylesheet'},
			// <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
			{ href: 'https://unpkg.com/vuetify/dist/vuetify.min.css', rel: 'stylesheet'},
			// <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet" type="text/css">
		],
		script: [
			{ src: 'https://unpkg.com/vuetify/dist/vuetify.min.js'}
		]
	},
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
		API_URL: 'http://127.0.0.1:3000'
  },
  vue: {
  	middleware: 'vuetify'
  }
}

