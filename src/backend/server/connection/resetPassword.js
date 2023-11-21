const User = require('../models/user')
const bcrypt = require('bcrypt')
const resetPassword = app => {
	app.post('/resetuserpwd', async (req, res) => {
		const { pwd, repeat_pwd } = req.body
		try {
			console.log('ok')
			const saltRounds = 5
			const hash = await bcrypt.hash(user_pwd, saltRounds)
			await User.update({ user_pwd: hash }, { where: {} })
			res.status(200).json({ message: 'Hasło zostało zresetowane' })
		} catch (err) {
			console.log(err)
			res.status(500).json({ error: 'błąd' })
		}
	})
}

module.exports = resetPassword
