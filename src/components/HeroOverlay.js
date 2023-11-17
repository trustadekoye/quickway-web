import React from 'react'
import './HeroOverlay.css'
import CloseIcon from '@mui/icons-material/Close';

function HeroOverlay(props) {
  return (
    <div className='app-overlay'>
        <div className='app-overlay-content'>
            <span className='close-button' onClick={props.onClose}>
                <CloseIcon />
            </span>
            <h2>Get the Qwikway app</h2>
            <p>Scan the QR code below to download the app</p>
            <img src='images/qrcode.png' alt='qrcode' />
        </div> 
    </div>
  );
}

export default HeroOverlay;