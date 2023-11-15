export const isLogin = () => {
	const token = localStorage.getItem('token')
	return !!token
}

export const outLogin = () => {
	localStorage.removeItem('token')
}

export const checkLogin = () => {
	const token = localStorage.getItem('token')
	return !!token
}
