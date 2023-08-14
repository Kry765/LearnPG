import '../scss/_dashboard.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import Praktyka from '../image/praktyka.jpg'
import Teoria from '../image/teoria.jpg'

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
				<div className='dashboard__section-box'>
					<img src={Teoria} alt='Teoria' className='dashboard__section-box-image' />
					<div className='dashboard__section-box-opacity wrapper'>
						<p className='dashboard__section-box--subtitle'>Teoria</p>
					</div>
				</div>
				<div className='dashboard__section-box'>
					<img src={Praktyka} alt='Praktyka' className='dashboard__section-box-image' />
					<div className='dashboard__section-box-opacity wrapper'>
						<p className='dashboard__section-box--subtitle'>Praktyka</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
