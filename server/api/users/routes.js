const express = require('express')
const router = express.Router()
const usersModels = require('./models')

router.get('/', (req, res) => {
	res.json(usersModels.users)
})

router.get('/:user', (req, res) => {
	let user = usersModels.users.filter(user => req.params.user === user.username)
	res.json(user)
})

module.exports = router