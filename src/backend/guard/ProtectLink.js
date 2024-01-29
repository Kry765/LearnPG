import { useNavigate } from 'react-router-dom'

export const isLogin = () => {
	const token = localStorage.getItem('token')
	return !!token
}
export const outLogin = () => {
	localStorage.removeItem('token')
}

export const useAuthNavigation = () => {
	const navigate = useNavigate()
	const checkUser = () => {
		if (!isLogin()) {
			navigate('/Login')
		}
	}
	return checkUser
}
