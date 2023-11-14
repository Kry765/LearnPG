export const isLogin = () => {
	const token = localStorage.getItem('token')
	return !!token
}

export const outLogin = () => {
	localStorage.removeItem('token')
}
