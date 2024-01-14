const Score = require('../models/user')

const getUserPoint = app => {
	app.get('/getscore', (req, res) => {
		Score.findAll({
			attributes: ['user_point'],
		})
			.then(scores => {
				const scoresData = scores.map(score => ({
					user_point: score.user_point,
				}))
				res.json(scoresData)
			})
			.catch(err => {
				console.log(err)
			})
	})
}

module.exports = getUserPoint
