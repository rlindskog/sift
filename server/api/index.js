import express from 'express'
import userRoutes from './users/routes'
import articleRoutes from './articles/routes'
import adminRoutes from './admin/routes'
const router = express.Router()

router.use('/admin', adminRoutes)
router.use('/users', userRoutes)
router.use('/articles', articleRoutes)
router.use('/admin', adminRoutes)


router.get('/', (req, res) => {
	res.json({
		users: `${process.env.API_URL}/api/users`
	})
})

export default router