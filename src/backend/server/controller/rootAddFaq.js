const Faq = require('../models/faq_table')

const addRootFaq = app => {
	app.post('/addrootfaq', async (req, res) => {
		const { faqName, faqDescription } = req.body

		try {
			const FaqExisting = await Faq.findOne({
				where: { faq_name: faqName },
			})
			if (FaqExisting) {
				res.status(200).json({ message: 'Faq exists' })
			}
			const addFaq = await Faq.create({
				faq_name: faqName,
				faq_description: faqDescription,
			})

			if (addFaq) {
				res.status(201).json({ message: 'Faqq added secessfully' })
			}
		} catch (error) {
			console.error(error)
			res.status(500).json({ error: 'Internal server Error' })
		}
	})
}

module.exports = addRootFaq
