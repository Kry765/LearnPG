const Faq = require('../models/faq_table')

const rootDeleteFaq = app => {
	app.post('/rootdeletefaq', async (req, res) => {
		const { idFaqDelete } = req.body
		try {
			const deleteFaq = await Faq.findOne({
				where: {
					faq_id: idFaqDelete,
				},
			})
			if (!deleteFaq) {
				return res.status(404).json({ message: 'Faq not found.' })
			}
			await deleteFaq.destroy()
			return res.status(200).json({ message: 'Faq deleted successfully' })
		} catch (error) {
			console.error(error)
			res.status(500).json({ message: 'Server Error' })
		}
	})
}
module.exports = rootDeleteFaq
