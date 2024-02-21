import React, { useEffect } from 'react'
import { LoggedInRoot } from '../../../backend/guard/Script'
import { useNavigate } from 'react-router-dom'
import { AdminMenu } from './AdminMenu'

export default function AdminPage() {
	const navigate = useNavigate()
	LoggedInRoot(navigate)

	return (
		<div className='root'>
			<div>
				<AdminMenu />
			</div>
			<div className='root__welcome'>
				<h1>Panel Administracyjny</h1>
				<p>Wybierz sekcje</p>
			</div>
		</div>
	)
}
