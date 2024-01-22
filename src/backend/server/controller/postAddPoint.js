const jwt = require('jsonwebtoken')
const User = require('../models/user')
const verifyUser = require('./verifyUser')

const postAddPoint = app => {
	app.post('/addpoint', verifyUser, async (req, res) => {
		try {
			const user = await User.findOne({ where: { user_email: req.user.user_email } })

			if (user) {
				await User.update({ user_point: user.user_point + 1 }, { where: { user_email: req.user.user_email } })

				const updatedUser = await User.findOne({ where: { user_email: req.user.user_email } })

				const newToken = jwt.sign(
					{
						user_email: updatedUser.user_email,
					},
					process.env.JWT_SECRET_KEY,
					{ expiresIn: '1h' }
				)

				res.json({
					success: true,
					message: 'Points added successfully',
					updatedUser: updatedUser.toJSON(),
					token: newToken,
				})
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
