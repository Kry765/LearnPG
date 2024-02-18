const User = require('../models/user')

const userData = [
	{
		user_email: 'example@wsiz.com',
		user_pwd: '$2a$05$B0YL1tQMbBhZ6/7q1QYLgeNWjrS7Cl2F4kz0rjnQZ3CuD3mbbtItK',
		user_point: 0,
	},
]

const createUserWsi = async () => {
	try {
		for (const userWsi of userData) {
			await User.create(userWsi)
			console.log('Użytkonwnik WSIZ dodany')
		}
	} catch (error) {
		console.error('Błąd podczas dodawania danych:', error)
	}
}

module.exports = createUserWsi
