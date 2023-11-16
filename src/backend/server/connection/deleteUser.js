const User = require('../models/user')

const deleteUserHandler = app => {
	app.post('/deleteuser', async (req, res) => {
		const { email } = req.body
		try {
			await User.destroy({ where: { user_email: email } })
			res.status(200).json({ message: 'skasowane' })
		} catch (err) {
			console.log(err)
			res.status(500).json({ message: 'Wystąpił błąd podczas usuwania konta' })
		}
	})
}

module.exports = deleteUserHandler
