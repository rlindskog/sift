import usersModel from './models'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export users = {
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
			let { username, email, password } = req.body
			let hash = bcrypt.hash(password, 10)

			let newUser = new userModel({ username, email, password: hash })
			let user = await newUser.save()
			res.json(user)
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Error 500. Internal server error' })
		}
	}
}

export username = {
	async get(req, res) {
		try {
			let username = req.body.username
			let user = await userModel.find({ username })
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

export signIn = {
	async post(req, res) {
		let { username, password } = req.body
		User.findOne({ username }).then(user => {
			// console.log(user)
			let hashedPassword = user.password
			bcrypt.compare(password, hashedPassword).then(matched => {
		    if (!user) {
					res.status(404).json({
						message: 'Authentication failed, can\'t find user'
					})
				} else if (!matched) {
					res.status(404).json({
						message: 'Authntication failed. Wrong password'
					})
				} else {
					user = filterSensitive(user)
					let token = jwt.sign(user, process.env.SECRET, {
						expiresIn: 60 * 60 * 24 * 30 // 30 days 
					})
					res.status(200).json({
						message: 'Enjoy your token!',
						token,
						user
					})
				}
			}).catch(error => {
				console.log(error)
				res.status(500).json({
					error
				})
			})
		})
	}
}

// export singOut = {
// 	async post(req, res) {

// 	}
// }