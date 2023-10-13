const User = require('../models/user')
const bcrypt = require('bcrypt')

const createUser = app => {
	app.post('/create', async (req, res) => {
		try {
			const { user_email, user_pwd } = req.body
			const saltRounds = 5

			// Hashowanie hasła
			const hash = await bcrypt.hash(user_pwd, saltRounds)

			console.log('Hashed Password:', hash)

			// Teraz możesz utworzyć użytkownika po zakończeniu operacji hashowania
			const newUser = await User.create({
				user_email: user_email,
				user_pwd: hash,
			})

			res.status(201).json(newUser)
		} catch (err) {
			console.error(err)
			res.status(500).json({ err: 'Error creating user' })
		}
	})
}

module.exports = createUser

// const { user_email, user_pwd } = req.body
// const checkEmail = await User.findOne({ where: { user_email: user_email } })
// if (checkEmail) {
// 	res.status(200).json('Email already exists')
// }

// const checkEmail = await User.findOne({ where: { user_email: user_email } })
// if (checkEmail) {
// 	res.status(200).json('Email already exists')
// }
