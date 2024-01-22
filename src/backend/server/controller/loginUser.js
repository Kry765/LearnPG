const User = require('../models/user')
const dotenv = require('dotenv')
dotenv.config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const auth = process.env.JWT_SECRET_KEY

const loginUser = app => {
	app.post('/signin', async (req, res) => {
		try {
			const { user_email, user_pwd } = req.body
			const user = await User.findOne({ where: { user_email } })

			if (!user) {
				return res.status(401).json({ message: 'Invalid credentials' })
			}

			const passwordMatch = await bcrypt.compare(user_pwd, user.user_pwd)

			if (!passwordMatch) {
				return res.status(401).json({ message: 'Invalid credentials' })
			}

			const token = jwt.sign({ user_email: user.user_email }, auth)

			console.log('Generated token:', token)

			res.cookie('token', token, {
				httpOnly: true,
				sameSite: 'strict',
				maxAge: 24 * 60 * 60 * 1000,
			})
			console.log('Cookie set:', token)

			res.json({ message: 'Login successful', redirect: '/Dashboard', token: token })
		} catch (error) {
			console.error(error)
			res.status(500).json({ message: 'Error logging in' })
		}
	})
}

module.exports = loginUser
