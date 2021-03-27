import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import Button from './Button';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handelClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>RWS <i className="fab fa-typo3"></i></Link>
                    <div onClick={handelClick} className="menu-icon">
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}> Blogs </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}> Add Blogs </Link>
                        </li>

                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}> Sign Up </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}
export default Navbar;