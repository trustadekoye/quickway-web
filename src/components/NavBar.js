import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [scrolling, setScrolling] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton =() => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

  return (
    <>
      <nav className={`navbar${scrolling ? '-scrolling' : ''}`}>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                <img src='images/Logo_3.png' alt='logo' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Earn with Quikway
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            <Button variant="text" sx={{ textTransform: 'none', color: '#fff' }}>Become a Courier</Button>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/get-app' className='nav-links-mobile' onClick={closeMobileMenu}>
                            <Button variant="text" sx={{ textTransform: 'none', color: '#fff' }} >Get the app</Button>
                        </Link>
                    </li>
                    </ul>
                    {button && <Button variant="text" endIcon={<ArrowRightAltIcon />} style={{ textTransform: 'none' }} sx={{ width: '14%', color: '#458787', padding: '0.8rem'}}>Become a Courier</Button>}
                    {button && <Button variant="contained" style={{ textTransform: 'none' }} sx={{ width: '14%', backgroundColor: '#458787', padding: '0.8rem', borderRadius: '15px' }}>Get the app</Button>}
        </div>
        </nav>
    </>
    );
}

export default NavBar;
