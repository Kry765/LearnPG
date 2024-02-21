import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminMenu } from './AdminMenu'
export default function AdminPage() {
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
