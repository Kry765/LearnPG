const User = require('../models/user')

const rootDeleteUser = app => {
	app.post('/rootdeleteuser', async (req, res) => {
		const { email } = req.body
		try {
			const userToDelete = await User.findOne({ where: { user_email: email } })

			if (!userToDelete) {
				return res.status(404).json({ message: 'User not found.' })
			}

			await userToDelete.destroy()
			return res.status(200).json({ message: 'Account deleted successfully', redirect: '/' })
		} catch (err) {
			console.log(err)
			res.status(500).json({ message: 'An error occurred while deleting the account.' })
		}
	})
}

module.exports = rootDeleteUser
