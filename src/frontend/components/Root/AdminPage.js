import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function AdminPage() {
	const Navigate = useNavigate()
	return (
		<div>
			<h1>Panel Administracyjny</h1>
			<p>Wykonaj zdarzenie na:</p>
			<button
				onClick={() => {
					Navigate('./ModifyUser')
				}}
			>
				Użytkownicy
			</button>
			<button
				onClick={() => {
					Navigate('./ModifyTopic')
				}}
			>
				Dział Teoria
			</button>
			<button
				onClick={() => {
					Navigate('./ModifyFaq')
				}}
			>
				Dział FAQ
			</button>
			<button
				onClick={() => {
					Navigate('./ModifyTest')
				}}
			>
				Dział Praktyka
			</button>
		</div>
	)
}
