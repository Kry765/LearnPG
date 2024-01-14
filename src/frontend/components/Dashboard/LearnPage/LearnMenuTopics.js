import React from 'react'

const LearnMenuTopics = ({ topics, handleTopic, handleItem }) => {
	return (
		<>
			{topics.map((topic, index) => (
				<div
					key={index}
					className={`learn__menu-item ${handleTopic === topic ? 'selected' : ''}`}
					onClick={() => handleItem(index)}
				>
					{topic.topic_name}
				</div>
			))}
		</>
	)
}

export default LearnMenuTopics
