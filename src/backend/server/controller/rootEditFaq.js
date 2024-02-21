const Faq = require('../models/faq_table')

const rootEditFaq = app => {
	app.post('/rooteditfaq', async (req, res) => {
		const { idFaqEdit, nameFaqEdit, DescriptionFaqEdit } = req.body

		const existingFaq = await Faq.findOne({ where: { faq_id: idFaqEdit } })
		if (!existingFaq) {
			return res.status(404).json({ message: 'Faq not found' })
		}
		const setNewFaq = await Faq.update(
			{
				faq_name: nameFaqEdit,
				faq_description: DescriptionFaqEdit,
			},
			{ where: { closequestion_id: idFaqEdit } }
		)
		try {
			if (setNewFaq) {
				return res.status(200).json({ message: 'Faq cahnge complete' })
			}
		} catch (error) {
			res.status(500).json({ success: false, message: 'Server error.' })
		}
	})
}

module.exports = rootEditFaq
