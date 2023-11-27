const Motivation = require('../models/motivation')

const getMotivations = app => {
	app.get('/getmotivations', (req, res) => {
		Motivation.findAll({
			attributes: ['motivation_text', 'motivation_author'],
		})
			.then(motivations => {
				const motivation = motivations.map(motivate => ({
					motivation_text: motivate.motivation_text,
					motivation_author: motivate.motivation_author,
				}))
				res.json(motivation)
			})
			.catch(err => {
				console.log(err)
			})
	})
}

module.exports = getMotivations
