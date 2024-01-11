import React from 'react'

const LearnTestBtn = ({ handleTopic, navigate }) => {
	const takeMeTest = () => {
		if (handleTopic && handleTopic.question_id) {
			navigate(`/Dashboard/Learn/LearnTest/${handleTopic.question_id}`)
		} else {
			console.log('handleTopic or handleTopic.question_id is false')
		}
	}

	return (
		<>
			{handleTopic && (
				<button className='learn__btn' onClick={takeMeTest}>
					Sprawdź wiedzę
				</button>
			)}
		</>
	)
}

export default LearnTestBtn
