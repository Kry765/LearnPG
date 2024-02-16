import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DashboardNav } from './Dashboard/StartPage/DashboardNav'
import { AiOutlineClose } from '../../backend/guard/Icons'

function Result() {
	const location = useLocation()
	const navigate = useNavigate()
	const { totalQuestions: receivedTotalQuestions = 0 } = location.state
	const [totalQuestions, setTotalQuestions] = useState(receivedTotalQuestions)
	const storedPoints = localStorage.getItem('points')

	const removePoint = () => {
		localStorage.removeItem('points')
	}

	return (
		<div>
			<div className='nav-auth__auth-item--close'>
				<AiOutlineClose
					onClick={() => {
						removePoint()
						navigate('/dashboard')
					}}
				/>
			</div>
			<div className='navigation'>
				<DashboardNav />
				<div className='section flex-center direction-column'>
					<div className='belt-auth-right'></div>
					<div className='belt-auth-left'></div>
					<h1 className='text-center'>Otrzymany wynik to:</h1>
					<p className='space-auth'>
						{storedPoints}/{totalQuestions}
					</p>
					<div>
						<button
							className='btn-auth'
							onClick={() => {
								removePoint()
								navigate('/dashboard')
							}}
						>
							Zakończ
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Result
