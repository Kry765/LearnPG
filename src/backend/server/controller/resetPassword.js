const User = require('../models/user')
const bcrypt = require('bcrypt')
const verifyUser = require('./verifyUser')
const jwt = require('jsonwebtoken')

const resetPassword = app => {
	app.post('/resetuserpwd', verifyUser, async (req, res) => {
		const { user_pwd } = req.body

		try {
			const user = await User.findOne({ where: { user_email: req.user.user_email } })

			const passwordMatch = await bcrypt.compare(user_pwd, user.user_pwd)

			if (!passwordMatch) {
				// Check if the new password is the same as the current password
				const newPasswordMatch = await bcrypt.compare(user_pwd, user.user_pwd)
				if (newPasswordMatch) {
					return res.status(400).json({ error: 'New password must be different from the current password' })
				}

				const saltRounds = 5
				const hash = await bcrypt.hash(user_pwd, saltRounds)

				const updatePwd = await User.update({ user_pwd: hash }, { where: { user_email: req.user.user_email } })

				if (updatePwd) {
					res.clearCookie(process.env.JWT_SECRET_KEY)

					const newToken = jwt.sign(
						{
							user_email: req.user.user_email,
						},
						process.env.JWT_SECRET_KEY,
						{ expiresIn: '1h' }
					)

					return res.json({
						success: true,
						message: 'Password reset successfully',
						token: newToken,
					})
				}
			} else {
				return res.status(400).json({ error: 'Provided password does not match the current password' })
			}
		} catch (err) {
			console.log(err)
			res.status(500).json({ error: 'Internal server error' })
		}
	})
}

module.exports = resetPassword
