import express from 'express'
import { spawn } from 'child_process'

const router = express.Router()

router.post('/author', (req, res) => {
	let { author } = req.body
	console.log(req.body)
	let process = spawn('python', ['./puller/APIPullers.py', author])
	let dataString = ''
	process.stdout.on('data', data => {
		dataString += data.toString()
	})
	process.stdout.on('end', data => {
		console.log(dataString)
		res.json(dataString)
	})
})

export default router