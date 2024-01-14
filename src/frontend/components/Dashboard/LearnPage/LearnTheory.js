import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../../scss/_dashboard.scss'
import '../../../scss/_reset.scss'
import '../../../scss/_learn.scss'
import { useAuthNavigation, outLogin } from '../../../../backend/guard/ProtectLink'
import {
	AiFillHome,
	AiTwotoneSetting,
	BiSolidHelpCircle,
	FaPowerOff,
	RxHamburgerMenu,
} from '../../../../backend/guard/Icons'
import LearnMenuTopics from './LearnMenuTopics'
import LearnTestBtn from './LearnTestBtn'
import LearnGetDescription from './LearnGetDescription'

const LearnTheory = () => {
	const API_URL = 'http://localhost:4000'
	const [topics, setTopics] = useState([])
	const [handleTopic, setHandleTopic] = useState(null)
	const [openSettings, setOpenSettings] = useState('')
	const [openTopics, setOpenTopics] = useState('')
	const navigate = useNavigate()
	const checkUser = useAuthNavigation()

	const handleLoggout = () => {
		outLogin()
		navigate('/Login')
	}

	useEffect(() => {
		checkUser()
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
	}, [topics, checkUser])

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
				<div className='learn__space-icon' onClick={handleLoggout}>
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
				<div className='learn__mobile-setting' onClick={handleLoggout}>
					Wyloguj się
				</div>
			</div>
			<div className='learn__description'>
				<h1>Rozpocznij nauke</h1>
				<h3>Wybierz interesujące cię zagadnienie</h3>
				<div>
					<p>
						<LearnGetDescription handleTopic={handleTopic} />
					</p>
				</div>
				<div className='flex-center'>
					<LearnTestBtn handleTopic={handleTopic} navigate={navigate} />
				</div>
			</div>
		</div>
	)
}

export default LearnTheory
