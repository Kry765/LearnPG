const Score = require('../models/user')
const verifyUser = require('./verifyUser')
const getUserPoint = app => {
	app.get('/getscore', verifyUser, (req, res) => {
		const user = req.user
		Score.findOne({
			where: { user_email: user.user_email },
			attributes: ['user_point'],
		})
			.then(score => {
				if (!score) {
					return res.status(404).json({ success: false, message: 'User not found or has no points.' })
				}

				const userPoint = {
					user_point: score.user_point,
				}
				res.json(userPoint)
			})
			.catch(err => {
				console.log(err)
				return res.status(500).json({ success: false, message: 'Server error.' })
			})
	})
}

module.exports = getUserPoint
