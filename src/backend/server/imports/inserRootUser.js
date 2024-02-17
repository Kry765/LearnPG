const Root = require('../models/root')

const rootData = [{ root_email: 'root@root.com', root_pwd: 'root' }]

Root.bulkCreate(rootData)
	.then(() => {
		console.log('Dane zostały pomyślnie dodane do bazy.')
	})
	.catch(error => {
		console.error('Błąd podczas dodawania danych:', error)
	})
