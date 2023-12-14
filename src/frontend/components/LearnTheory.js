import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../scss/_learn.scss'
import { useNavigate } from 'react-router-dom'
import '../scss/_dashboard.scss'
import { AiFillHome } from 'react-icons/ai'
import { AiTwotoneSetting } from 'react-icons/ai'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { FaPowerOff } from 'react-icons/fa'
import { isLogin, outLogin } from '../../backend/guard/ProtectLink'
import { RxHamburgerMenu } from 'react-icons/rx'

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

	const takeMeTest = () => {
		if (handleTopic && handleTopic.question_id) {
			navigate(`/Dashboard/Learn/LearnTest/${handleTopic.question_id}`)
		} else {
			console.log('handleTopic lub handleTopic.question_id jest falsy')
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
				<div>
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
