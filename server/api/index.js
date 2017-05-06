const express = require('express')
const usersRoutes = require('./users/routes')
const router = express.Router()


router.use('/users', usersRoutes)

router.get('/', (req, res) => {
	res.json({
		users: 'http://localhost:8080/api/users'
	})
})

module.exports = router