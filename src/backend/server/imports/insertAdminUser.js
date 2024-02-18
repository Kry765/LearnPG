const Admin = require('../models/admin')

const insertAdminAccound = [
	{
		admin_email: 'root@root.com',
		admin_pwd: 'root',
	},
]

const createAdminAccound = async () => {
	try {
		for (const insertAdmin of insertAdminAccound) {
			await Admin.create(insertAdmin)
			console.log('Administrator dodany')
		}
	} catch (error) {
		console.error('Błąd podczas dodawania danych', error)
	}
}

module.exports = createAdminAccound
