import React, { useState } from 'react';
import '../App.css';
import { Button } from '@mui/material';
import './HeroSection.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HeroOverlay from './HeroOverlay';

function HeroSection() {

    const [showOverlay, setShowOverlay] = useState(false);

    const openOverlay = () => {
        setShowOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
    };

    return (
        <div className='hero-container'>
            <img src='images/hero-img.png' alt='home' />
            <h1 className='text'>Hassle-Free
                <br className='text-2' />
                <span style={{ color: '#458787' }}> Package Delivery</span>
            </h1>
            <p className='hero-paragraph'>Deliver packages without breaking a sweat. Don't add worrying about dispatch riders to your to-do list. We take care of every details from pick up to drop off so you don't have to.
            </p>
            <div className='hero-btns'>
                <div className='button-container'>
                    <Button className='btns' onClick={openOverlay} variant='contained' sx={{ textTransform: 'none', width: '50%', height: '50%', backgroundColor: '#458787', padding: '0.8rem', borderRadius: '15px' }}>Get the app</Button>
                    <Button className='btns' variant='text' endIcon={<ArrowRightAltIcon />} sx={{ textTransform: 'none', width: '40%', height: '60%', color: '#458787', padding: '0.8rem' }} >Sign up as a driver</Button>
                </div>
        </div>
        <HeroOverlay show={showOverlay} onClose={closeOverlay} />
        </div>
    )
}

export default HeroSection;