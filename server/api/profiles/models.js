import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	age: {
		type: Number
	}
	profilePicture: {
		type: String
	},
	articles: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Article'
	}],
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, {
	timestamps: true
})

const profileModel = mongoose.model('Profile', profileSchema)

export default = profileModel