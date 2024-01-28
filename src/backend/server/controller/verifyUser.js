const jwt = require('jsonwebtoken')
const cookie = require('cookie')
// const User = require('../mod els/user')

const verifyUser = (req, res, next) => {
	try {
		res.header('Access-Control-Allow-Credentials', true)
		const cookies = cookie.parse(req.headers.cookie || '')
		const token = cookies.token

		console.log('Token from Headers:', token)
		if (!token) {
			return res.status(401).json({ success: false, message: 'Unauthorized: Missing or invalid token.' })
		}

		jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
			if (err) {
				console.error(err)
				return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token.' })
			}

			console.log('Decoded Token:', decoded)

			req.user = decoded
			next()
		})
	} catch (error) {
		console.error(error)
		return res.status(500).json({ success: false, message: 'Server error.' })
	}
}

module.exports = verifyUser
