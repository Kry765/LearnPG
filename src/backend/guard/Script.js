import emailjs from 'emailjs-com'

//Check Correct Email
export const checkCorrectEmail = user_email => {
	const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
	if (!validEmail.test(user_email)) {
		return 'Wprowadzony adres email jest nieprawidłowy'
	}
}

//Check Input
export const checkEmptyInput = (user_email, user_input, user_textarea, repeat_pwd) => {
	if (user_email === '' || user_input === '' || user_textarea === '' || repeat_pwd === '') {
		return 'Uzupełnij brakujące pola'
	}
}

//check Repeat Password
export const checkRepeatPassword = (user_pwd, repeat_pwd) => {
	if (repeat_pwd !== user_pwd) {
		return 'Wprowadzone hasła są różne'
	}
}


//send Mai
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

export const loginUser = () => {

}