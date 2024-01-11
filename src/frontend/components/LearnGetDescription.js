import React from 'react'

const LearnGetDescription = ({ handleTopic }) => {
	if (handleTopic) {
		return handleTopic.topic_description.split('\n').map((line, index) => (
			<div key={index} className='learn__description'>
				{line}
			</div>
		))
	}
	return null
}

export default LearnGetDescription
