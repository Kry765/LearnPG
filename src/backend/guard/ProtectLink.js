export const isLogin = () => {
	const token = localStorage.getItem('token')
	return !!token
}
//loggin out
export const outLogin = () => {
	localStorage.removeItem('token')
}

