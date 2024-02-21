import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
	AiFillHome,
	AiTwotoneSetting,
	BiSolidHelpCircle,
	FaPowerOff,
	RxHamburgerMenu,
	AiOutlineClose,
} from '../../../../backend/guard/Icons'
import { LoggedInUser } from '../../../../backend/guard/Script'

const LearnTheory = () => {
	const API_URL = 'http://localhost:4000'
	const [handleTopic, setHandleTopic] = useState(null)
	const navigate = useNavigate()
	const [openSettings, setOpenSettings] = useState('')
	const [topics, setTopics] = useState([])
	const [openTopics, setOpenTopics] = useState('false')
	LoggedInUser(navigate)

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
		<div className='learn flex'>
			{/*MOBILE*/}
			<div className='learn__mobile-top-icon'>
				<div>
					<RxHamburgerMenu onClick={() => setOpenTopics(!openTopics)} />
				</div>
				<div>
					<AiTwotoneSetting onClick={() => setOpenSettings(!openSettings)} />
				</div>
			</div>
			{/*MOBILE*/}
			<div className={openTopics ? 'learn__topics-section-mobile-close' : 'learn__topics-section-mobile'}>
				{topics.map((topic, index) => (
					<div
						key={index}
						className={`learn__topic-section-item ${handleTopic === topic ? '' : ''}`}
						onClick={() => handleItem(index)}
					>
						{topic.topic_name}
					</div>
				))}
			</div>
			{/*MOBILE*/}
			<div
				className={`learn__mobile-top-settings ${openSettings ? 'learn__settings-menu' : 'learn__settings-menu-close'}`}
			>
				<div
					className='learn__settings-section-item'
					onClick={() => {
						navigate('/dashboard')
					}}
				>
					Panel Główny
				</div>
				<div
					className='learn__settings-section-item'
					onClick={() => {
						navigate('/dashboard/settings')
					}}
				>
					Ustawienia
				</div>
				<div
					className='learn__settings-section-item'
					onClick={() => {
						navigate('/dashboard/help')
					}}
				>
					Pomoc
				</div>
				<div className='learn__settings-section-item'>Wyloguj się</div>
			</div>
			{/*DESKTOP*/}
			<div className='learn__navigation'>
				<div
					className='learn__navigation-icon'
					onClick={() => {
						navigate('/dashboard')
					}}
				>
					<AiFillHome />
				</div>
				<div
					className='learn__navigation-icon'
					onClick={() => {
						navigate('/dashboard/setting')
					}}
				>
					<AiTwotoneSetting />
				</div>
				<div
					className='learn__navigation-icon'
					onClick={() => {
						navigate('/dashboard/help')
					}}
				>
					<BiSolidHelpCircle />
				</div>
				<div className='learn__navigation-icon'>
					<FaPowerOff />
				</div>
			</div>
			{/*DESKTOP*/}
			<div className='learn__topics-section-desktop '>
				<div className='flex-center direction-column'>
					{topics.map((topic, index) => (
						<div
							key={index}
							className={`learn__topics-section-desktop-item ${handleTopic === topic ? '' : ''}`}
							onClick={() => handleItem(index)}
						>
							{topic.topic_name}
						</div>
					))}
				</div>
			</div>

			<div className='learn__description'>
				<h1>Rozpocznij nauke</h1>
				<h3>Wybierz interesujące cię zagadnienie</h3>
				{handleTopic &&
					handleTopic.topic_description.split('\n').map((line, index) => (
						<div key={index} className=''>
							{line}
						</div>
					))}

				<div className='flex-center'>
					{handleTopic && (
						<button className='btn-auth' onClick={takeMeTest}>
							Sprawdź wiedzę
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default LearnTheory
