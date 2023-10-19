import '../scss/_dashboard.scss'
import { Link } from 'react-router-dom'


function Dashboard() {
	return (
		<div className='dashboard'>
			<div className='dashboard__left-menu'>
				<div className='dashboard__menu-items'>
					<div className='dashboard__menu-item'>Logo</div>
					<div className='dashboard__menu-item'>Materiały</div>
					<div className='dashboard__menu-item'>Pomoc</div>
					<div className='dashboard__menu-item'>Ustawienia</div>
					<div className='dashboard__menu-item'>Rozpocznij nauke</div>
					<div className='dashboard__menu-item'>Wyloguj się</div>
				</div>
			</div>
			<div className='dashboard__welcome-page'>
				<h1>Witaj</h1>
				<div>
					<Link to='/dashboard/learn'>Rozpocznij nauke</Link>
					<Link to='/dashboard/exam'>Rozpocznij test</Link>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
