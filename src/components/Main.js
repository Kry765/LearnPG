import React from 'react'
// import '../scss/_reset.scss'
import '../scss/_main.scss'
import { Link } from 'react-router-dom'


function Main () {
    return(
<div><nav>
        <div className='nav'>
            <div className='nav__menu--logo'></div>
            <div className='nav__burgericon'></div>
            <div className='nav__menu'>About me</div>
            <div className='nav__menu'>Contact</div>
            <div className='nav__menu'>
                <Link to='Login'>Log in</Link>
            </div>
            <div className='nav__menu--register-btn'>
                <Link to='/Register'>Sing up</Link>
            </div>
        </div>
    </nav>
    <header>
        <div className='header'>
            <div className='header__position'>
                <h1 className='header__welcome-h1'>Learn postgres</h1>
                <p className='header__welcome-text'>
                    Gain valuable knowledge of relational database management systems that will help you find a job in IT
                </p>
                <button className='header__welcome-btn'>Get Started</button>
            </div>
        </div>
    </header>
</div>
    );
}

export default Main