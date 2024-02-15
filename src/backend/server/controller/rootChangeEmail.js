const User = require('../models/user')

const rootChangeEmail = app => {
	app.post('/rootchangeemail', async (req, res) => {
		const { oldEmail, newEmail } = req.body
		const setEmail = await User.update({ user_email: newEmail }, { where: { user_email: oldEmail } })
		try {
			if (!setEmail) {
				return res.status(404).json({ message: 'User not found' })
			} else {
				return res.status(200).json({ message: 'Reset email complete' })
			}
		} catch (error) {
			res.status(500).json({ success: false, message: 'Server error.' })
		}
	})
}

module.exports = rootChangeEmail
