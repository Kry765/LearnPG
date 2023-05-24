import React from 'react'
import '../scss/_main.scss'
import Register from './Register';
import { Link } from "react-router-dom";

function Main () {
    return(
    <nav>
        <div>
            <div className='nav'>
                <div className='nav__logo'>Logo</div>
                <div className='nav__menu'>About me</div>
                <div className='nav__menu'>Contact</div>
                <div className='nav__menu'>Sign In</div>
                <div className='nav__menu'>
                    <Link to="/Register">Get Started
                        </Link></div>
            </div>
        </div>
    </nav>
    );
}

export default Main