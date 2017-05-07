import express from 'express'
import usersModels from './models'
import { users, username, signIn } from './controllers'
import authenticate from '../../middleware/authenticate'
const router = express.Router()

router.get('/', users.get)
router.post('/', users.post)

router.post('/signin', signIn.post)
// router.get('/signin', signIn.post)

router.get('/:username', authenticate, username.get)
router.post('/:username', authenticate, username.post)
router.put('/:username', authenticate, username.put)
router.delete('/:username', authenticate, username.delete)

export default router