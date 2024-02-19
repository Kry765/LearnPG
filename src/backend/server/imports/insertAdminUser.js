const Admin = require('../models/admin')

const insertAdminAccound = [
	{
		admin_email: 'root@root.com',
		admin_pwd: '$2b$05$U9vdIrafcnmwOQhpu5OIWeTJ3T7rGkzvoWOAKn0Q.H0P9oISQGt7W',
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
