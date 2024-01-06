import '../scss/_settings.scss'
import { useAuthNavigation } from '../../backend/guard/ProtectLink'
import { useEffect } from 'react'
import { DashboardNav } from './DashboardNav'

function Help() {
	const checkUser = useAuthNavigation()
	useEffect(() => {
		checkUser()
	}, [])

	return (
		<div>
			<div className='navigation'>
				<DashboardNav />
				<div className='href'>
					<h3>FAQ</h3>
					<div>
						<button className='href__btn'>Gdzie moge skierować pytania lub wątpliwości?</button>
					</div>
					<div>
						<button className='href__btn'>Czy istnieje możliwość zmiany adresu mail lub hasła?</button>
					</div>
					<div>
						<button className='href__btn'>Czy treść która znajduje się na stronie jest aktualna?</button>
					</div>
					<div>
						<button className='href__btn'>Co mogę zrobić z zebranymi punktami?</button>
					</div>
					<div>
						<button className='href__btn'>Czy moje dane są bezpiecznie?</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Help
