const express = require('express')
const api = require('./api/index')

const app = express()

app.use('/api', api)

app.listen(3000, err => {
	if (err) throw err
	console.log('🌎 listening at http://localhost:8080')
})