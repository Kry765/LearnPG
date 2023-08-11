import '../scss/_dashboard.scss'
import { RxHamburgerMenu } from 'react-icons/rx'

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<div className='wrapper dashboard__menu-items'>
				<div>
					<RxHamburgerMenu className='wrapper dashboard__menu-burger' />
				</div>
				<div className='dashboard__menu-item--menu-logo'>logo</div>
				<div className='dashboard__menu-item'>Support</div>
				<div className='dashboard__menu-item'>Setting</div>
				<div className='dashboard__menu-item'>User</div>
			</div>
			<div className='dashboard__main wrapper'>
				<div className='dashboard__section-box--theory wrapper'>Ucz się teorii</div>
				<div className='dashboard__section-box wrapper'>Ucz się praktyka</div>
			</div>
		</div>
	)
}

export default Dashboard
