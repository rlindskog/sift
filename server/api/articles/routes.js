import express from 'express'
import { articles } from './controllers'
const router = express.Router()

router.get('/', articles.get)
router.post('/', articles.post)

// router.get('/:articleId', articleId.get)
// router.post('/:articleId', articleId.post)
// router.delete('/:articleId', articleId.delete)



export default router