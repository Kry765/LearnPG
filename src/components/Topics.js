import React, { useState, useEffect } from 'react'

export default function Theory() {
	const [topics, setTopics] = useState([])

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
		<div>
			<h1>Teoria</h1>
			{topics.map((topic, index) => (
				<div key={index}>
					<strong>{topic.topic_name}</strong>: {topic.topic_description}
				</div>
			))}
		</div>
	)
}
