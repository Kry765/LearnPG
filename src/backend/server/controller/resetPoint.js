const User = require('../models/user')
const jwt = require('jsonwebtoken')
const verifyUser = require('./verifyUser')

const resetPoint = app => {
	app.post('/resetPoint', verifyUser, async (req, res) => {
		try {
			const updatedPoint = await User.findOne({ where: { user_email: req.user.user_email } })

			if (updatedPoint) {
				await User.update({ user_point: 0 }, { where: { user_email: req.user.user_email } })
				const newToken = jwt.sign(
					{
						user_email: updatedPoint.user_email,
					},
					process.env.JWT_SECRET_KEY,
					{ expiresIn: '1h' }
				)
				res.json({
					success: true,
					message: 'Reset Point',
					updatedPoint: updatedPoint.toJSON(),
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

module.exports = resetPoint
