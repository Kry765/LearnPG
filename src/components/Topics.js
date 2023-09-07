import React, { useState, useEffect } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import '../scss/style.scss'
import '../scss/_topics.scss'

export default function Topics() {
	const [topics, setTopics] = useState([])
	const [description, setDescription] = useState(false)

	const takeDescription = () => {
		setDescription(!description)
	}

	useEffect(() => {
		fetchTopics()
	}, [])

	const fetchTopics = async () => {
		try {
			const response = await fetch('http://localhost:4000/score')
			if (response.ok) {
				const data = await response.json()
				setTopics(data)
			} else {
				console.error('Error fetching topics:', response.statusText)
			}
		} catch (error) {
			console.error('Error fetching topics:', error)
		}
	}

	return (
		<div className='topics'>
			<h1>Lista Tematów</h1>
			{topics.map((topic, index) => (
				<div className='topics__sections' key={index}>
					<div className='topics__section'>
						<div onClick={takeDescription}>
							<span>{index + 1}. </span>
							<span>{topic.topic_name}</span>
							<div className={description ? 'topics__close-section' : 'topics__take-section'}>
								<div>{topic.topic_description}</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
