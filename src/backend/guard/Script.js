import emailjs from 'emailjs-com'

export const checkCorrectEmail = user_email => {
	const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
	if (!validEmail.test(user_email)) {
		return 'Wprowadzony adres email jest nieprawidłowy'
	}
}

export const checkEmptyInput = (user_email, user_input, user_textarea) => {
	if (user_email === '' || user_input === '' || user_textarea === '') {
		return 'Uzupełnij brakujące pola'
	}
}

export const sendEmail = async form => {
	emailjs.sendForm('service_uch3syy', 'template_rlainun', form.target, 'OXIurWGg9OpDvDAzF').then(
		result => {
			window.location.reload()
		},
		error => {
			console.log(error.text)
		}
	)
}
