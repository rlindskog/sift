import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		require: true
	},
	email: {
		type: String,
		unique: false,
	},
	password: {
		type: String,
		unique: true,
		require: true
	},
	articles: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Article'
	}]
	// profile: {
	// 	type: mongoose.Schema.Types.ObjectID,
	// 	ref: 'Profile'
	// }
}, {
  timestamps: true
})

const userModel = mongoose.model('User', userSchema)


// hash the password if it is ever saved to the DB.
userSchema.pre('save', async function(callback) {
	if (!this.isModified('password')) return callback()
	const hash = await bcrypt.hash(this.password, 10)
	this.password = hash
	callback()
})


export default userModel


// module.exports = {
// 	users: [
// 		{
// 			username: 'rlindskog',
// 			email: 'r.lindskog17@gmail.com',
// 			admin: true,
// 			verified: true,
// 			href: `${process.env.API_URL}/api/rlindskog`
// 		},
// 		{
// 			username: 'john',
// 			email: 'john@gmail.com',
// 			admin: false,
// 			verified: false,
// 			href: `${process.env.API_URL}/api/john`
// 		},
// 		{
// 			username: 'jaccob',
// 			email: 'jaccob@gmail.com',
// 			admin: false,
// 			verified: true,
// 			href: `${process.env.API_URL}/api/jaccob`
// 		},
// 	]
// }