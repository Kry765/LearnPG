const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { Pool } = require('pg')
const port = 4000

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
	console.log(`Server running on port ${port}`);
})

const getUser = 'SELECT * FROM users'
const registerUser = 'INSERT INTO users (user_email, user_pwd) VALUES ($1, $2) RETURNING *'

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

app.post('/register', (req, res) => {
	pool.query(registerUser, values, (error, results) => {
		if (error) {
			throw error
		}
		res.status(201).send(`User added with ID: ${results.rows[0].id}`)
	})
})
