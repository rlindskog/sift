import express from 'express'
import { articles, articleId } from './controllers'
const router = express.Router()

router.get('/', articles.get)
router.post('/', articles.post)

router.get('/:_id', articleId.get)
router.post('/:_id', articleId.post)
router.delete('/:_id', articleId.delete)

export default router