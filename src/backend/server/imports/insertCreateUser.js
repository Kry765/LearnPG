const User = require('../models/user')

const userData = [{ user_email: 'example@wsiz.com', user_pwd: 'wsiz#1234' }]

User.bulkCreate(userData)
	.then(() => {
		console.log('Dane zostały pomyślnie dodane do bazy.')
	})
	.catch(error => {
		console.error('Błąd podczas dodawania danych:', error)
	})
