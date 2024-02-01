const User = require('../models/user')
const veryfiyUser = require('../controller/verifyUser')

const deleteUserHandler = app => {
	app.post('/deleteuser', veryfiyUser, async (req, res) => {
		const { email } = req.body.user
		const loggedInUserEmail = req.user.user_email

		console.log('User Email:', email)

		if (email !== loggedInUserEmail) {
			return res.status(403).json({ message: 'Forbidden: Provided email does not match the authenticated user.' })
		}

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

module.exports = deleteUserHandler
