const logout = app => {
	app.post('/logout', (req, res) => {
		res.clearCookie(process.env.JWT_SECRET_KEY, {
			httpOnly: true,
			sameSite: 'strict',
		})
		res.status(200).json({ message: 'Logout successful' })
	})
}

module.exports = logout
