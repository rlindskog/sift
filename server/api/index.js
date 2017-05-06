const express = require('express')
const usersRoutes = require('./users/routes')
const router = express.Router()


router.use('/users', usersRoutes)

router.get('/', (req, res) => {
	res.json({
		users: `${process.env.API_URL}/users`
	})
})

module.exports = router