const Faq = require('../models/faq_table')

const getFaq = app => {
	app.get('/getfaq', (req, res) => {
		Faq.findAll({
			attributes: ['faq_id', 'faq_name', 'faq_description'],
		})
			.then(faqs => {
				const faqData = faqs.map(faq => ({
					faq_id: faq.faq_id,
					faq_name: faq.faq_name,
					faq_description: faq.faq_description,
				}))
				res.json(faqData)
			})
			.catch(err => {
				console.log(err)
			})
	})
}

module.exports = getFaq
