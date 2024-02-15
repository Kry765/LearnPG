const bcrypt = require('bcrypt')
const User = require('../models/user')

const rootResetPassword = app => {
	app.post('/rootresetpassword', async (req, res) => {
		const { email, password } = req.body
		const saltRounds = 5
		const hash = await bcrypt.hash(password, saltRounds)
		const setNewPassword = await User.update({ user_pwd: hash }, { where: { user_email: email } })

		try {
			if (!setNewPassword) {
				return res.status(404).json({ message: 'User not found' })
			} else {
				return res.status(200).json({ message: 'Reset password complete' })
			}
		} catch (error) {
			console.error(error)
			res.status(500).json({ success: false, message: 'Server error.' })
		}
	})
}

module.exports = rootResetPassword
