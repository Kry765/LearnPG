const User = require('../models/user')
const bcrypt = require('bcrypt')

const createUser = app => {
	app.post('/create', async (req, res) => {
		try {
			const { user_email, user_pwd } = req.body
			const saltRounds = 5
			const hash = await bcrypt.hash(user_pwd, saltRounds)
			const newUser = await User.create({
				user_email: user_email,
				user_pwd: hash,
				user_point: 0,
			})

			res.status(201).json(newUser)
		} catch (err) {
			console.error(err)
			res.status(500).json({ err: 'Error creating user' })
		}
	})
}

module.exports = createUser
