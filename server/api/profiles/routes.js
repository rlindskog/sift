import express from 'express'
import { profile } from './controllers'
const router = express.Router()

rotuer.get('/', profile.get)

export default router