const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { Pool } = require('pg')
const port = 4000
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pool = new Pool({
	user: 'postgres',
	password: 'postgres',
	host: 'localhost',
	database: 'postgresql_tutorial',
	port: 5432,
})

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

//test server.js
const getUser = 'SELECT * FROM users'
app.get('/test', (req, res) => {
	pool
		.query(getUser)
		.then(result => {
			const data = result.rows
			res.json(data)
		})
		.catch(error => {
			console.error('Błąd:', error)
			res.status(500).json({ error: 'Wystąpił błąd serwera.' })
		})
})

//create user
app.post('/create', (req, res) => {
	const { user_email, user_pwd } = req.body
	const registerUser = 'INSERT INTO users (user_email, user_pwd) VALUES ($1, $2)'
	const values = [user_email, user_pwd]
	pool.query(registerUser, values, (error, values) => {
		if (error) {
			throw error
		} else {
			console.log('ok')
		}
	})
})

//login user
app.post('/login', (req, res) => {
	const { user_email, user_pwd } = req.body
	const loginUser = 'SELECT * FROM users WHERE user_email = $1'
	const values = [user_email, user_pwd]
	pool.query(loginUser, [values], (error, result) => {
		if (error) {
			return res.status(500).json({ message: 'Wystąpił błąd serwera' })
		}

		const users = result.rows[0]

		if (!users) {
			// console.log(users)
			return res.status(401).json({ message: 'Nieprawidłowy login lub hasło' })
		}
		if (users.haslo !== haslo) {
			return res.status(401).json({ message: 'Nieprawidłowy login lub hasło' })
		}
		res.redirect('/dashboard')
	})
})

app.get('/dashboard', (req, res) => {
	res.send('Panel główny')
})
