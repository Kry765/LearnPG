const User = require('../models/user')
const verifyUser = require('./verifyUser')
const jwt = require('jsonwebtoken')

const resetEmailHandler = app => {
	app.post('/resetuseremail', verifyUser, async (req, res) => {
		const { new_email } = req.body
		try {
			const existingUser = await User.findOne({ where: { user_email: new_email } })
			if (existingUser) {
				return res.status(200).json({ error: 'Email already exists in the database' })
			}

			const updateEmail = await User.findOne({ where: { user_email: req.user.user_email } })
			if (updateEmail) {
				await User.update({ user_email: new_email }, { where: { user_email: req.user.user_email } })

				res.clearCookie(process.env.JWT_SECRET_KEY)

				const newToken = jwt.sign(
					{
						user_email: new_email,
					},
					process.env.JWT_SECRET_KEY,
					{ expiresIn: '1h' }
				)

				return res.json({
					success: true,
					message: 'Reset Email',
					updatedEmail: new_email,
					token: newToken,
				})
			}
		} catch (err) {
			console.error(err)
			return res.status(500).json({ error: 'Wystąpił błąd podczas aktualizacji adresu email' })
		}
	})
}

module.exports = resetEmailHandler
