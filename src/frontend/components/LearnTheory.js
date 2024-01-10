import React, { useState, useEffect } from 'react'
import { outLogin } from '../../backend/guard/ProtectLink'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../scss/_dashboard.scss'
import '../scss/_learn.scss'
import { AiFillHome, AiTwotoneSetting, BiSolidHelpCircle, FaPowerOff, RxHamburgerMenu } from '../../backend/guard/Icons'
import { useAuthNavigation } from '../../backend/guard/ProtectLink'

const LearnTheory = () => {
	const API_URL = 'http://localhost:4000'
	const [topics, setTopics] = useState([])
	const [handleTopic, setHandleTopic] = useState(null)
	const [openSettings, setOpenSettings] = useState('')
	const navigate = useNavigate()

	const handleLoggout = () => {
		outLogin()
		navigate('/Login')
	}

	const checkUser = useAuthNavigation()
	useEffect(() => {
		checkUser()
	}, [])

	const takeMeTest = () => {
		console.log('handleTopic:', handleTopic)
		console.log('question_id:', handleTopic && handleTopic.question_id)

		if (handleTopic && handleTopic.question_id) {
			navigate(`/Dashboard/Learn/LearnTest/${handleTopic.question_id}`)
		} else {
			console.log('handleTopic or handleTopic.question_id is falsy')
		}
	}

	const handleItem = index => {
		setHandleTopic(topics[index])
	}

	const getDescription = () => {
		if (handleTopic) {
			return handleTopic.topic_description.split('\n').map((line, index) => (
				<div key={index} className='learn__description'>
					{line}
				</div>
			))
		}
		return null
	}

	useEffect(() => {
		if (topics.length === 0) {
			axios
				.get(API_URL + '/gettopic')
				.then(res => {
					setTopics(res.data)
				})
				.catch(err => {
					console.log(err)
				})
		}
	}, [topics])

	return (
		<div className='learn'>
			<div className='learn__mobile-settings-menu'>
				<div>
					<RxHamburgerMenu />
				</div>
				<div onClick={() => setOpenSettings(!openSettings)}>
					<AiTwotoneSetting />
				</div>
			</div>
			<div className='learn__box--sticky-menu'>
				<div
					className='learn__space-icon'
					onClick={() => {
						navigate('/dashboard')
					}}
				>
					<AiFillHome />
				</div>
				<div
					className='learn__space-icon'
					onClick={() => {
						navigate('./settings')
					}}
				>
					<AiTwotoneSetting />
				</div>
				<div
					className='learn__space-icon'
					onClick={() => {
						navigate('/dashboard/help')
					}}
				>
					<BiSolidHelpCircle />
				</div>
				<div className='learn__space-icon' onClick={handleLoggout}>
					<FaPowerOff />
				</div>
			</div>
			<div className='learn__box--sticky-section'>
				<div className='learn__menu-items'>
					{topics.map((topic, index) => (
						<div
							key={index}
							className={`learn__menu-item ${handleTopic === topic ? 'selected' : ''}`}
							onClick={() => handleItem(index)}
						>
							{topic.topic_name}
						</div>
					))}
				</div>
			</div>
			<div className={openSettings ? 'learn__mobile-settings--close' : 'learn__mobile-settings'}>
				<div
					className='learn__space-icon'
					onClick={() => {
						navigate('/dashboard')
					}}
				>
					Panel Główny
				</div>
				<div
					className='learn__space-icon'
					onClick={() => {
						navigate('./settings')
					}}
				>
					Ustawienia
				</div>
				<div
					className='learn__space-icon'
					onClick={() => {
						navigate('/dashboard/help')
					}}
				>
					Pomoc
				</div>
				<div className='learn__space-icon' onClick={handleLoggout}>
					Wyloguj się
				</div>
			</div>
			<div className='learn__description'>
				<h1>Rozpocznij nauke</h1>
				<h3>Wybierz interesujące cię zagadnienie</h3>
				<div>
					<p>{getDescription()}</p>
				</div>
				<div className='flex-center'>
					{handleTopic && (
						<button className='learn__btn' onClick={takeMeTest}>
							Sprawdź wiedzę
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default LearnTheory
