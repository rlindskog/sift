import express from 'express'
import usersRoutes from './users/routes'
import articlesRoutes from './articles/routes'

const router = express.Router()

router.use('/users', usersRoutes)
router.use('/articles', articlesRoutes)

router.get('/', (req, res) => {
	res.json({
		users: `${process.env.API_URL}/api/users`
	})
})

export default router