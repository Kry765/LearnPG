import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LearnMenuTopics from './LearnMenuTopics'
import axios from 'axios'
import {
	FaDatabase,
	AiFillHome,
	AiTwotoneSetting,
	BiSolidHelpCircle,
	FaPowerOff,
	RxHamburgerMenu,
} from '../../../../backend/guard/Icons'

const LearnTheory = () => {
	const API_URL = 'http://localhost:4000'
	const [handleTopic, setHandleTopic] = useState(null)
	const navigate = useNavigate()
	const [openSettings, setOpenSettings] = useState('')
	const [topics, setTopics] = useState([])
	const [openTopics, setOpenTopics] = useState('')

	useEffect(() => {
		// checkUser()
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

	const takeMeTest = () => {
		if (handleTopic && handleTopic.question_id) {
			navigate(`/Dashboard/Learn/LearnTest/${handleTopic.question_id}`)
		} else {
			console.log('handleTopic or handleTopic.question_id is false')
		}
	}

	const handleItem = index => {
		setHandleTopic(topics[index])
	}

	return (
		<div className='learn'>
			<div className='learn__mobile-settings-menu'>
				<div>
					<RxHamburgerMenu className='learn__mobile-icon' onClick={() => setOpenTopics(!openTopics)} />
				</div>
				<div>
					<AiTwotoneSetting className='learn__mobile-icon' onClick={() => setOpenSettings(!openSettings)} />
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
				<div className='learn__space-icon'>
					<FaPowerOff />
				</div>
			</div>
			<div className='learn__box--sticky-section'>
				<div className='learn__menu-items'>
					<LearnMenuTopics topics={topics} handleTopic={handleTopic} handleItem={handleItem} />
				</div>
			</div>
			<div className={openTopics ? 'learn__mobile-settings--close' : 'learn__mobile-settings'}>
				<LearnMenuTopics topics={topics} handleTopic={handleTopic} handleItem={handleItem} />
			</div>
			<div className={openSettings ? 'learn__mobile-settings' : 'learn__mobile-settings--close'}>
				<div
					className='learn__mobile-setting'
					onClick={() => {
						navigate('/dashboard')
					}}
				>
					Panel Główny
				</div>
				<div
					className='learn__mobile-setting'
					onClick={() => {
						navigate('./settings')
					}}
				>
					Ustawienia
				</div>
				<div
					className='learn__mobile-setting'
					onClick={() => {
						navigate('/dashboard/help')
					}}
				>
					Pomoc
				</div>
				<div className='learn__mobile-setting'>Wyloguj się</div>
			</div>
			<div className='learn__description'>
				<h1>Rozpocznij nauke</h1>
				<h3>Wybierz interesujące cię zagadnienie</h3>

				{handleTopic &&
					handleTopic.topic_description.split('\n').map((line, index) => (
						<div key={index} className='learn__description'>
							{line}
						</div>
					))}

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
