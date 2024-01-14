const User = require('../models/user')

const resetEmailHandler = app => {
	app.post('/resetpwd', async (req, res) => {
		const { new_email } = req.body

		try {
			await User.update({ user_email: new_email }, { where: {} })
			console.log('Adres email został zaktualizowany')
			res.status(200).json({ message: 'Adres email został zaktualizowany' })
		} catch (err) {
			console.log(err)
			res.status(500).json({ error: 'Wystąpił błąd podczas aktualizacji adresu email' })
		}
	})
}

module.exports = resetEmailHandler
