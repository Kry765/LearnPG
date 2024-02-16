import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminMenu } from './AdminMenu'
export default function AdminPage() {
	return (
		<div className='root'>
			<div>
				<AdminMenu />
			</div>
			<div>
				<h1>Panel Administracyjny</h1>
			</div>
		</div>
	)
}
