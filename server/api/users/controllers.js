import usersModel from './models'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { filterSensative } from '../../util/filtersensative'

export const users = {
	async get(req, res) {
		try {
			let users = await usersModel.find({})
			res.json(users)
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Error 500. Internal server error' })
		}
	},
	async post(req, res) {
		try {
			let hash = await bcrypt.hash(password, 10)
			let newUser = new usersModel({ username, email, password: hash })
			let user = await newUser.save()
			res.json(user)
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Error 500. Internal server error' })
		}
	}
}

export const username = {
	async get(req, res) {
		try {
			let username = req.body.username
			let user = await usersModel.find({ username })
			res.json(user)
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Error 500. Internal server error' })
		}
	},
	async post(req, res) {
		try {
			let { username, email } = req.body
			let user = await usersModel.findOneAndUpdate({ username }, { username, email })
			res.status(200).json(user)
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Error 500. Internal server error' })
		}
	},
	async put(req, res) {
		try {
			let { username, email } = req.body
			let user = await usersModel.findOneAndUpdate({ username }, { username, email })
			res.status(201).json(user)
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Error 500. Internal server error' })
		}
	},
	async delete(req, res) {

	},
}

export const signIn = {
	async post(req, res) {
		try {
			let { username, password } = req.body
			let user = await usersModel.findOne({ username })
			let hashedPassword = user.password
			let matched =	await bcrypt.compare(password, hashedPassword)
	    if (!user) {
				res.status(404).json({
					message: 'Authentication failed, can\'t find user'
				})
			} else if (!matched) {
				res.status(404).json({
					message: 'Authntication failed. Wrong password'
				})
			} else {
				user = filterSensative(user)
				let token = jwt.sign(user, process.env.SECRET, {
					expiresIn: 60 * 60 * 24 * 30 // 30 days 
				})
				res.status(200).json({
					message: 'Enjoy your token!',
					token,
					user
				})
			}
		} catch (error) {
			console.log(error)
			res.status(500).json({
				error: 'Internal Server Error.'
			})
		}
	}
}

// export singOut = {
// 	async post(req, res) {

// 	}
// }