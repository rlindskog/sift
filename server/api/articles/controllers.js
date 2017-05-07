import aritclesModel from './models'

export const articles = {
	async get(req, res) {
		try {
			const articles = await aritclesModel.find({})
			res.json(articles)
		} catch(error) {
			console.log(error)
			res.status(500).json({ error: 'Internal server error.' })
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
			let newArticle = new aritclesModel({
				author,
				pub_date,
				publication,
				title,
				url,
				mixed
			})
			let article = await newArticle.save()
			res.json(user)
		} catch(error) {
			console.log(error)
			res.status(500).json({ error: 'Internal server error.' })
		}
	}
}

export const articlesId


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