import articleModel from './models'
import userModel from '../users/models'
import uuid from 'uuid'
const slug = require('slug')

export const articles = {
	async get(req, res) {
		try {
			const articles = await articleModel.find({})
			res.json(articles)
		} catch(error) {
			console.log(error)
			res.status(500).json({ message: 'Internal server error.' })
		}
	},
	async post(req, res) {
		try {
			let {
				author,
				pub_date,
				publication,
				title,
				url,
				mixed
		  } = req.body
			let newArticle = new articleModel({
				author,
				pub_date,
				publication,
				title,
				url,
				mixed
			})
			let article = await newArticle.save()
			let sluggedAuthor = slug(author, {
				lower: true
			})
			let user = await userModel.findOne({ username: sluggedAuthor })
			console.log(user)
			if (!user) {
				console.log("USER DOESN'T EXIST")
				let newUser = new userModel({
					username: sluggedAuthor,
					password: uuid.v4().toString(),
					articles: [
						article._id
					]
				})
				console.log(newUser)
				let generatedUser = await newUser.save()
				console.log('saved a user', generatedUser)
			} else {
				user.articles.push(article._id)
				await user.save()
				console.log('saved a user', generatedUser)
			}


			res.json(article)
		} catch(error) {
			console.log(error)
			if (error.code === 11000) {
				res.status(202).json({ message: 'Already exists' })
			}
			res.status(500).json({ message: 'Internal server error.' })
		}
	}
}

export const articleId = {
	async get(req, res) {
		try {
			let { _id } = req.params
			console.log(req.params)
			let article = await articleModel.find({ _id })
			res.json(article)
		} catch(error) {
			console.log(error)
			res.status(500).json({ error: 'Internal Server Error.' })
		}
	},
	async post(req, res) {
		try {
			let {
				author,
				pub_date,
				publication,
				title,
				url,
				mixed,
				_id
		  } = req.body
		  // let payload = Object.keys(req.body).reduce((acc, item) => {	
		  // }, {})
			let article = await articleModel.findOneAndUpdate({ _id }, {
				author,
				pub_date,
				publication,
				title,
				url,
				mixed
			})
			res.status(200).json(article)
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Error 500. Internal server error' })
		}
	},
	async delete(req, res) {
		try {
			let { _id } = req.params
			let article = await articleModel.findByIdAndRemove({ _id })
			res.json({ article, message: 'Successfully deleted.' })
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Internal Server Error.' })
		}
	}
}


// {
// 	 'author': u'David Remnick',
//   'pub_date': u'2017-03-19T02:53:06Z',
//   'publication': u'The New Yorker',
//   'title': u'Remembering Chuck Berry, Who Died at Ninety',
//   'url': u'http://www.newyorker.com/culture/culture-desk/remembering-chuck-berry-who-died-at-ninety?mbid=rss'
// }


// router.get('/', articles.get)
// router.post('/', articles.post)

// router.get('/:articleId', articleId.get)
// router.post('/:articleId', articleId.post)
// router.delete('/:articleId', articleId.delete)