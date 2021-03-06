import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema({
	author: {
		type: [String],
		require: true
	},
	title: {
		type: String,
		require: true,
	},
	publication: {
		type: String,
		required: true
	},
	url: {
		type: String,
		require: true,
		unique: true,
	},
	body: {
		type: String,
		require: true
	},
	pub_date: {
		type: String,
	},
	misc: {
		type: mongoose.Schema.Types.Mixed
	}
})


const articleModel = mongoose.model('Article', articleSchema)

export default articleModel

// {
// 	"author": "David Remnick",
//   "pub_date": "2017-03-19T02:53:06Z",
//   "publication": "The New Yorker",
//   "title": "Remembering Chuck Berry, Who Died at Ninety",
//   "url": "http://www.newyorker.com/culture/culture-desk/remembering-chuck-berry-who-died-at-ninety?mbid=rss",
//   "mixed": "{ \"dog\": \"Sayllu\" }" 
// }