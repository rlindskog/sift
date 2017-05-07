import mongoose from "mongoose"

const articlesSchema = new mongoose.Schema({
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
	pub_date: {
		type: String,
	},
	misc: {
		type: mongoose.Schema.Types.Mixed
	}
})


const articlesModel = mongoose.model('Article', articlesSchema)

export default articlesModel

// {
// 	"author": "David Remnick",
//   "pub_date": "2017-03-19T02:53:06Z",
//   "publication": "The New Yorker",
//   "title": "Remembering Chuck Berry, Who Died at Ninety",
//   "url": "http://www.newyorker.com/culture/culture-desk/remembering-chuck-berry-who-died-at-ninety?mbid=rss",
//   "mixed": "{ \"dog\": \"Sayllu\" }" 
// }