export const checkCorrectEmail = () => {
	const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
	if (!validEmail.test(user_email)) {
		return setOutput('Wprowadzony adres email jest nieprawidłowy')
	}
}
