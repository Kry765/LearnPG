import { useState } from 'react'
import axios from 'axios'
import { AdminMenu } from './AdminMenu'

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
		<div className='root'>
			<div>
				<AdminMenu />
			</div>
			<div className='root__right-page'>
				<div>
					<h2 className='root__space-input'>FAQ</h2>
				</div>
			</div>
		</div>
	)
}
