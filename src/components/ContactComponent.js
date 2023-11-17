import React from 'react'
import './ContactComponent.css'
import { ReactComponent as FacebookIcon } from '../components/icons/facebook.svg'
import { ReactComponent as TwitterIcon } from '../components/icons/twitter.svg'
import { ReactComponent as InstagramIcon } from '../components/icons/instagram.svg'


function ContactComponent() {
  return (
    <div className='contact-flex'>
        <div className='contact-main'>
            <div className='contact-flex-item'>
                <h2>Contact us</h2>
                <p>Get in touch:</p>
                <p>support@qwikway.com</p>
            </div>
            <div className='socials'>
                <h3>Follow us</h3>
                <div className='social_icon'>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
            </div>
        </div>
        <div className='contact-main'>
            <img src='images/amico.png' alt='contact' />
        </div>
    </div>
  )
}

export default ContactComponent
