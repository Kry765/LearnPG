import { useNavigate } from 'react-router-dom'

export function AdminMenu() {
	const Navigate = useNavigate()
	return (
		<div className='root__left-menu'>
			<div
				className='root__left-menu-items'
				onClick={() => {
					Navigate('../root/adminpage/ModifyUser')
				}}
			>
				Użytkownicy
			</div>
			<div
				className='root__left-menu-items'
				onClick={() => {
					Navigate('../root/adminpage/ModifyTopic')
				}}
			>
				Dział Teoria
			</div>
			{/* <div
				className='root__left-menu-items'
				onClick={() => {
					Navigate('../root/adminpage/ModifyFaq')
				}}
			>
				Dział FAQ
			</div> */}
			<div
				className='root__left-menu-items'
				onClick={() => {
					Navigate('../root/adminpage/ModifyTest')
				}}
			>
				Dział Praktyka
			</div>
			<div
				className='root__left-menu-items'
				onClick={() => {
					Navigate('./')
				}}
			>
				Wyloguj się
			</div>
		</div>
	)
}
