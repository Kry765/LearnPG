import '../scss/_learn.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Learn() {
	const API_URL = 'http://localhost:4000'

	const [topics, setTopics] = useState([])
	const [handleTopic, setHandleTopics] = useState(null)

	const handleItem = index => {
		setHandleTopics(topics[index])
	}

	const getDescription = () => {
		if (handleTopic) {
			return handleTopic.topic_description
		}

		return ''
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
	})

	return (
		<div className='learn'>
			<div className='learn__left-menu'>
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
				<h1>Rozpocznij nauke</h1>
				<h3>Wybierz interesujące cię zagadnienie</h3>
				<div className='learn__description'>{getDescription()}</div>
			</div>
		</div>
	)
}

export default Learn
