import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../../scss/_reset.scss'
// import { useAuthNavigation } from '../../../../backend/guard/ProtectLink'
import { DashboardNav } from '../StartPage/DashboardNav'

function Help() {
	const API_URL = 'http://localhost:4000'
	const [handleFaq, setHandleFaq] = useState(null)
	// const checkUser = useAuthNavigation()
	const [faqs, setFaqs] = useState([])
	const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)

	const getFaq = () => {
		if (handleFaq) {
			return handleFaq.faq_description.split('\n').map((line, index) => <div key={index}>{line}</div>)
		}
		return null
	}

	const handleFaqItem = index => {
		setHandleFaq(faqs[index])
		setIsDescriptionVisible(false)
	}

	useEffect(() => {
		// checkUser()
		if (faqs.length === 0) {
			axios
				.get(API_URL + '/getfaq')
				.then(res => {
					setFaqs(res.data)
					setHandleFaq(res.data[0])
				})
				.catch(err => {
					console.log(err)
				})
		}
	}, [faqs])

	return (
		<div className='navigation'>
			<DashboardNav />
			<div className='section'>
				<div className='href'>
					<h3>FAQ</h3>
					<div className='flex-column'>
						{faqs.map((faq, index) => (
							<button
								key={index}
								className='href__btn'
								onClick={() => {
									handleFaqItem(index)
									setIsDescriptionVisible(true)
								}}
							>
								{faq.faq_name}
							</button>
						))}
					</div>
				</div>
				<div className='navigation__faq-description'>{isDescriptionVisible && <p>{getFaq()}</p>}</div>
			</div>
		</div>
	)
}

export default Help
