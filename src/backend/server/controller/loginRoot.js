const Admin = require('../models/admin')
const dotenv = require('dotenv')
dotenv.config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const auth = process.env.JWT_SECRET_KEY

const loginRoot = app => {
	app.post('/rootlogin', async (req, res) => {
		try {
			const { admin_email, admin_pwd } = req.body
			const checkAdmin = await Admin.findOne({ where: { admin_email } })

			if (!checkAdmin) {
				return res.status(401).json({ message: 'Invalid credentials' })
			}

			const passwordMatch = await bcrypt.compare(admin_pwd, checkAdmin.admin_pwd)

			if (!passwordMatch) {
				return res.status(401).json({ message: 'Invalid credentials' })
			}

			const token = jwt.sign({ admin_email: checkAdmin.admin_email }, auth)

			console.log('Generated token:', token)

			res.cookie('token', token, {
				httpOnly: true,
				sameSite: 'strict',
				maxAge: 24 * 60 * 60 * 1000,
			})
			console.log('Cookie set:', token)

			res.json({ message: 'Login successful', redirect: '/adminpage', token: token })
		} catch (error) {
			console.error(error)
			res.status(500).json({ message: 'Error logging in' })
		}
	})
}

module.exports = loginRoot
