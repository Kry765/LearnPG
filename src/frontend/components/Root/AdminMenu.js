import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RxHamburgerMenu, AiOutlineClose, FaDatabase } from '../../../backend/guard/Icons'

export function AdminMenu() {
	const [changeIcon, setChangeIcon] = useState('')
	const Navigate = useNavigate()
	const [openNav, setOpenNav] = useState('')

	// useEffect(() => {
	// 	if (openNav) {
	// 		Navigate('../adminpage/ModifyUser')
	// 	}
	// }, [openNav, Navigate])

	return (
		<nav>
			<div className='root-nav'>
				<div className='flex justify-center justify-end'>
					<div className='root__desktop-item'>
						<div
							onClick={() => {
								Navigate('../adminpage/ModifyUser')
							}}
						>
							Uzytkownicy
						</div>
					</div>
					<div className='root__desktop-item'>
						<div
							onClick={() => {
								Navigate('../adminpage/ModifyTopic')
							}}
						>
							Teoria
						</div>
					</div>
					<div
						className='root__desktop-item'
						onClick={() => {
							Navigate('../adminpage/ModifyTest')
						}}
					>
						Test
					</div>
					<div
						className='root__desktop-item'
						onClick={() => {
							Navigate('../adminpage/ModifyFaq')
						}}
					>
						FaQ
					</div>
					<div
						className='root__desktop-item'
						onClick={() => {
							Navigate('../adminpage/ModifyFaq')
						}}
					>
						Wyloguj się
					</div>
					<div className='root__burger-bar'>
						{changeIcon ? (
							<AiOutlineClose
								className='root__close-icon'
								onClick={() => {
									setOpenNav(false)
									setChangeIcon(false)
								}}
							/>
						) : (
							<RxHamburgerMenu
								className={openNav ? 'root__mobile-item' : ''}
								onClick={() => {
									setOpenNav(!openNav)
									setChangeIcon(true)
								}}
							/>
						)}
					</div>
				</div>
				<div
					className={
						openNav ? 'nav__mobile-items flex justify-center align-start direction-column' : 'root__close-mobile-items'
					}
				>
					<div className='nav__mobile-item'>
						<div
							onClick={() => {
								Navigate('../adminpage/ModifyUser')
							}}
						>
							Użytkownicy
						</div>
					</div>

					<div className='nav__mobile-item'>
						<div
							onClick={() => {
								Navigate('../adminpage/ModifyTopic')
							}}
						>
							Teoria
						</div>
					</div>

					<div className='nav__mobile-item'>
						<div
							onClick={() => {
								Navigate('../adminpage/ModifyTest')
							}}
						>
							Test
						</div>
					</div>

					<div
						className='nav__mobile-item'
						onClick={() => {
							Navigate('../adminpage/ModifyFaq')
						}}
					>
						FaQ
					</div>
					<div
						className='nav__mobile-item'
						onClick={() => {
							Navigate('/')
						}}
					>
						Wyloguj się
					</div>
				</div>
			</div>
		</nav>
	)
}
