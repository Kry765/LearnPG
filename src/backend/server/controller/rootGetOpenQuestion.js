const OpenQuestion = require('../models/open_question')

const rootGetOpenQuestions = app => {
	app.get('/rootgetopenquestion', async (req, res) => {
		try {
			const OpenQuestions = await OpenQuestion.findAll()
			res.status(200).json(OpenQuestions)
		} catch (err) {
			console.log(err)
			res.status(500).json({ error: 'Internal server error' })
		}
	})
}

module.exports = rootGetOpenQuestions
