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

const Learn = () => {
	const API_URL = 'http://localhost:4000'
	const [topics, setTopics] = useState([])
	const [handleTopic, setHandleTopic] = useState(null)
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
			<div className='learn__navigation'>
				<div>
					<div
						onClick={() => {
							navigate('/dashboard')
						}}
					>
						<AiFillHome />
					</div>
					<div
						onClick={() => {
							navigate('./settings')
						}}
					>
						<AiTwotoneSetting />
					</div>
					<div
						onClick={() => {
							navigate('/dashboard/help')
						}}
					>
						<BiSolidHelpCircle />
					</div>
					<div onClick={handleLoggout}>
						<FaPowerOff />
					</div>
				</div>
			</div>
			<div className='learn__position'>
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
			<div className='learn__right-menu'>
				<h1 className='learn__header-space'>Rozpocznij nauke</h1>
				<h3 className='learn__header-space'>Wybierz interesujące cię zagadnienie</h3>
				<div className='learn__description'>
					<p>{getDescription()}</p>
				</div>
				<div className='flex-center'>
					<button onClick={takeMeTest} className='learn__btn'>
						Sprawdź wiedzę
					</button>
				</div>
			</div>
		</div>
	)
}

export default Learn
