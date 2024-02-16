const CloseQuestion = require('../models/close_question')

const rootGetCloseQuestions = app => {
	app.get('/rootgetclosequestion', async (req, res) => {
		try {
			const CloseQuestions = await CloseQuestion.findAll()
			res.status(200).json(CloseQuestions)
		} catch (err) {
			console.log(err)
			res.status(500).json({ error: 'Internal server error' })
		}
	})
}

module.exports = rootGetCloseQuestions
