import { useState } from 'react'
import axios from 'axios'

export default function ModifyFaq() {
	const [handleFaq, setHandleFaq] = useState('')
	const [faqs, setFaqs] = useState([])
	const API_URL = 'http://localhost:4000'

	const getFaq = () => {
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
	return (
		<div>
			<h2>Lista FAQ:</h2>
			<div>
				{faqs.map((faq, index) => (
					<p key={index}>
						<br />
						<br />
						{faq.faq_id}
						<br />
						<br />
						{faq.faq_name}
						<br />
						<br />
						{faq.faq_description}
					</p>
				))}
			</div>
		</div>
	)
}
