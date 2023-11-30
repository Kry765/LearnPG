dotenv.config()

const User = require('../models/user')

const postAddPoint = app => {
	app.post('/addpoint', async (req, res) => {
		try {
			const user = await User.findOne({ where: { user_email: req.body.user_email } })

			if (user) {
				await User.update({ user_point: user.user_point + 1 }, { where: { user_email: req.body.user_email } })

				const updatedUser = await User.findOne({ where: { user_email: req.body.user_email } })

				res.json({ success: true, message: 'Points added successfully', updatedUser })
			} else {
				res.json({ success: false, message: 'User not found.' })
			}
		} catch (error) {
			console.error(error)
			res.status(500).json({ success: false, message: 'Server error.' })
		}
	})
}

module.exports = postAddPoint
