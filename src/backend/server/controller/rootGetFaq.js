const Faq = require('../models/faq_table')

const rootGetFaq = app => {
	app.get('/rootgetfaq', async (req, res) => {
		try {
			const getRootFaq = await Faq.findAll()
			res.status(200).json(getRootFaq)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error: 'Internal server error' })
		}
	})
}

module.exports = rootGetFaq
