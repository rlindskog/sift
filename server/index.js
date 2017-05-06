import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import api from './api/index'
import mongoose from 'mongoose'
import Nuxt from 'nuxt'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', api)

// Connect to DB
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  nuxt.build()
  .catch((error) => {
    console.error(error) // eslint-disable-line no-console
    process.exit(1)
  })
}


app.listen(process.env.PORT, process.env.HOST, err => {
	if (err) throw err
	console.log(`🌎 listening at http://${process.env.HOST}:${process.env.PORT}`)
})