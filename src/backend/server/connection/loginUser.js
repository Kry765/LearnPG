const User = require('../models/user')
const jwtSecretKey = 'IpE!O!h87xOO6mTI0yTl-$G+9qsrztkrKti9FJn0iaSG'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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

			const token = jwt.sign({ userId: user.user_id }, jwtSecretKey)
			res.cookie('token', token, { httpOnly: true })

			res.json({ message: 'Login successful', redirect: '/Dashboard' })
		} catch (error) {
			res.status(500).json({ message: 'Error logging in' })
		}
	})
}

module.exports = loginUser
