import { useNavigate } from 'react-router-dom'

export const isLogin = () => {
	const token = localStorage.getItem('token')
	return !!token
}
//loggin out
export const outLogin = () => {
	localStorage.removeItem('token')
}

//protect unauth user
export const useAuthNavigation = () => {
	const navigate = useNavigate()
	const checkUser = () => {
		if (!isLogin()) {
			navigate('/Login')
		}
	}
	return checkUser
}
