import express from 'express'

const router = express.Router()

router.get('/', )

router.get('/:user', (req, res) => {
	let user = usersModels.users.filter(user => req.params.user === user.username)
	res.json(user)
})

module.exports = router