const jwt = require('jsonwebtoken')

let authenticate = (req, res, next) => {
	let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token
	if (token) {
		jwt.verify(token, process.env.SECRET, (error, decoded) => {
			if (error) {
				return res.status(400).json({
					message: 'Failed to authenticate token.'
				})
			} else {
				req.user = decoded
				next()
			}
		})
	} else {
		return res.status(403).send({
			message: 'No token provided.'
		})
	}
}

module.exports = {
	authenticate
}