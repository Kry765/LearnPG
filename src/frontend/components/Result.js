import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DashboardNav } from './Dashboard/StartPage/DashboardNav'
import { AiOutlineClose } from '../../backend/guard/Icons'

function Result() {
	const location = useLocation()
	const navigate = useNavigate()
	const {
		points: receivedPoints,
		totalQuestions: receivedTotalQuestions,
		incorrectAnswers,
	} = location.state || {
		points: 0,
		totalQuestions: 0,
	}

	const [points, setPoints] = useState(receivedPoints)
	const [totalQuestions, setTotalQuestions] = useState(receivedTotalQuestions)
	const [dataReady, setDataReady] = useState(false)

	useEffect(() => {
		if (receivedPoints > points) {
			setPoints(receivedPoints)
		}
		if (receivedTotalQuestions > totalQuestions) {
			setTotalQuestions(receivedTotalQuestions)
		}
		setDataReady(true)
	}, [receivedPoints, receivedTotalQuestions])

	if (!dataReady) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<div className='nav-auth__auth-item--close'>
				<AiOutlineClose
					onClick={() => {
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
						{points}/{totalQuestions}/
					</p>
					<div>
						<button
							className='btn-auth'
							onClick={() => {
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
