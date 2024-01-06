import '../scss/_settings.scss'
import { useNavigate } from 'react-router-dom'
import { isLogin } from './../../backend/guard/ProtectLink'
import { useEffect } from 'react'
import { DashboardNav } from './DashboardNav'

function Help() {
	const navigate = useNavigate()

	useEffect(() => {
		if (!isLogin()) {
			navigate('/Login')
		}
	}, [navigate])

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
