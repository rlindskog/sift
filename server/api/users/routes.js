import express from 'express'
import usersModels from './models'
import { users, username, signIn } from './controllers'
import authenticate from '../../middleware/authenticate'
const router = express.Router()

router.get('/', users.get)
router.post('/', users.post)

router.post('/signin', signIn.post)
// router.get('/signin', signIn.post)

router.get('/:user', authenticate, username.get)
router.post('/:user', authenticate, username.post)
router.put('/:user', authenticate, username.put)
router.delete('/:user', authenticate, username.delete)

export default router