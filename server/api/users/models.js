import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const usersSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		require: true
	},
	email: {
		type: String,
		unique: true,
		require: true
	},
	password: {
		type: String,
		unique: true,
		require: true
	}
}, {
  timestamps: true
})

const usersModel = mongoose.model('User', usersSchema)


// hash the password if it is ever saved to the DB.
usersSchema.pre('save', async function(callback) {
	if (!this.isModified('password')) return callback()
	const hash = await bcrypt.hash(this.password, 10)
	this.password = hash
	callback()
})


export default usersModel


// module.exports = {
// 	users: [
// 		{
// 			username: 'rlindskog',
// 			email: 'r.lindskog17@gmail.com',
// 			admin: true,
// 			verified: true,
// 			href: `${process.env.API_URL}/rlindskog`
// 		},
// 		{
// 			username: 'john',
// 			email: 'john@gmail.com',
// 			admin: false,
// 			verified: false,
// 			href: `${process.env.API_URL}/john`
// 		},
// 		{
// 			username: 'jaccob',
// 			email: 'jaccob@gmail.com',
// 			admin: false,
// 			verified: true,
// 			href: `${process.env.API_URL}/jaccob`
// 		},
// 	]
// }