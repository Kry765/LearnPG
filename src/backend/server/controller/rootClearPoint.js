const User = require('../models/user')

const rootClearPoint = app => {
	app.post('/rootresetpoint', async (req, res) => {
		const { email } = req.body
		const clearPoint = await User.update({ user_point: 0 }, { where: { user_email: email } })
		try {
			if (!clearPoint) {
				return res.status(404).json({ message: 'User not found' })
			} else {
				return res.status(200).json({ message: 'Account reset complete' })
			}
		} catch (error) {
			console.error(error)
			res.status(500).json({ success: false, message: 'Server error.' })
		}
	})
}

module.exports = rootClearPoint
