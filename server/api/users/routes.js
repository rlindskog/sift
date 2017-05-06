import express from 'express'
import usersModels from './models'
import { users, username, signIn } from './controllers'

const router = express.Router()

router.get('/', users.get)
router.post('/', users.post)


router.get('/:user', username.get)
router.post('/:user', username.post)
router.put('/:user', username.put)
router.delete('/:user', username.delete)

router.post('/signin', signIn.post)

export default router