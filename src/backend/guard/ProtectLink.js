import axios from 'axios'

export const outLogin = async navigate => {
	try {
		const response = await axios.post(
			'http://localhost:4000/logout',
			{},
			{
				withCredentials: true,
			}
		)

		if (response.status === 200) {
			console.log('Logout successful')
			navigate('/Login')
		} else {
			console.error('Logout failed')
		}
	} catch (error) {
		console.error('Error during logout:', error)
	}
}

export const inLogin = async navigate => {
	try {
		const response = await axios.get('http://localhost:4000/checkUser', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			withCredentials: true,
		})
		console.log('Response:', response)
		if (response.status === 200) {
			console.log('User is authenticated')
		} else if (response.status === 401) {
			console.log('User is not authenticated')
			navigate('/Login')
		}
	} catch (error) {
		console.error(error)
		navigate('/Login')
	}
}
