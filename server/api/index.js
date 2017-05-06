import express from 'express'
import usersRoutes from './users/routes'

const router = express.Router()

router.use('/users', usersRoutes)

router.get('/', (req, res) => {
	res.json({
		users: `${process.env.API_URL}/users`
	})
})

export default router