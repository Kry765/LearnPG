const User = require('../models/user')
const bcrypt = require('bcrypt')

const createUser = app => {
	app.post('/create', async (req, res) => {
		try {
			const { user_email, user_pwd } = req.body
			const saltRounds = 5
			const hash = await bcrypt.hash(user_pwd, saltRounds)
			const existingUser = await User.findOne({ user_email })
			if (existingUser) {
				return res.status(200).json({ err: 'Account exists' })
			} else {
				const newUser = await User.create({
					user_email: user_email,
					user_pwd: hash,
					user_point: 0,
				})
				return res.status(201).json(newUser)
			}
		} catch (err) {
			console.error(err)
			res.status(500).json({ err: 'Error creating user' })
		}
	})
}

module.exports = createUser
