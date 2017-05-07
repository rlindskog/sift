import mongoose from 'mongoose'

const articlesSchema = new mongoose.Schema({
	author: {
		type: [String],
		require: true
	},
	pub_date: {
		type: String,
	},
	title: {
		type: String,
		require: true
	},
	url: {
		type: String,
		require: true
	},
	claimed: {
		type: Boolean,
		default: false
	}
	misc: {
		type: mongoose.Schema.Types.Mixed
	}
})


const articlesModel = mongoose.model('Article', articlesSchema)

export default articlesModel

// {
// 	'author': u'David Remnick',
//   'pub_date': u'2017-03-19T02:53:06Z',
//   'publication': u'The New Yorker',
//   'title': u'Remembering Chuck Berry, Who Died at Ninety',
//   'url': u'http://www.newyorker.com/culture/culture-desk/remembering-chuck-berry-who-died-at-ninety?mbid=rss'
// }