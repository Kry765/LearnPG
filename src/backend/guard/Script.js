import emailjs from 'emailjs-com'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const checkCorrectEmail = user_email => {
	const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
	if (!validEmail.test(user_email)) {
		return 'Wprowadzony adres email jest nieprawidłowy'
	}
}

export const checkEmptyInput = (user_email, user_input, user_textarea, repeat_pwd) => {
	if (user_email === '' || user_input === '' || user_textarea === '' || repeat_pwd === '') {
		return 'Uzupełnij brakujące pola'
	}
}

export const checkRepeatPassword = (user_pwd, repeat_pwd) => {
	if (repeat_pwd !== user_pwd) {
		return 'Wprowadzone hasła są różne'
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

export const checkStrongPwd = (user_pwd, repeat_pwd) => {
	const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
	if (repeat_pwd !== user_pwd || !pwdRegex.test(user_pwd)) {
		return 'Twoje hasło jest za słabe musi się składać z minimum 8 znaków, posiadać małe i duże litery, cyfry oraz znaki specialne'
	}
	return null
}

export const LoggedInUser = () => {
	const navigate = useNavigate()
	const session = localStorage.getItem('token')

	useEffect(() => {
		if (!session) {
			navigate('/login')
		}
	}, [session, navigate])

	return null
}

export const LoggedInRoot = () => {
	const navigate = useNavigate()
	const session = localStorage.getItem('token')

	useEffect(() => {
		if (!session) {
			navigate('/root')
		}
	}, [session, navigate])

	return null
}

export const alreadyLogin = () => {
	const token = localStorage.getItem('token')

	if (token) {
		window.location.href = '/dashboard'
	}
}

export const logoutUser = () => {
	localStorage.removeItem('token')
	window.location.href = '/login'
}

export const logoutRoot = () => {
	localStorage.removeItem('token')
	window.location.href = '/root'
}
