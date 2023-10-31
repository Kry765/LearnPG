import axios from 'axios'
import { useState } from 'react'

function Exam() {
	return (
		<div>
			<div>Egzamin z działu: </div>
			<div>
				<p></p>
			</div>

			<div>Pytanie nr. 1/50</div>
			<p>A.</p>
			<p>B.</p>
			<p>C.</p>
			<input type='button' value='sprawdz' />
		</div>
	)
}

export default Exam
