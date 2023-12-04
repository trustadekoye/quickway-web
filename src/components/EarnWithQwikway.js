import React from 'react'
import './EarnWithQwikway.css'
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { colors } from '@mui/material';

function EarnWithQwikway() {
  return (
    <div className='card-2'>
      <div className='card-2-body'>
        <h1>Earn With Qwikway</h1>
        <p>Got a bike? Make money delivering packages as one of our courier</p>
        <img src='images/earn-with-qwikway.png' alt='earn' />
      </div>
      <div className='card-flex'>
        <div className='text-flex'>
      <div className='column-2'>
        <div className='number-box'>1
        </div>
        <div className='text-box'>
        <h2>Earn some extra cash in no time!</h2>
        <p>"Don't sweat it! No subscription fees here, and you'll pocket your earnings every week."</p>
        </div>
    </div>
    <div className='column-2'>
    <div className='number-box'>2</div>
    <div className='text-box'>
        <h2>Make money whenever you feel like it!</h2>
        <p>"You're in control of when and how frequently you make deliveries - whether it's on weekdays, evenings, weekends, or even just for a few hours now and then. It's all your call."</p>
        </div>
    </div>
    <div className='column-2'>
    <div className='number-box'>3</div>
    <div className='text-box'>
        <h2>Whatever vehicle you have!</h2>
        <p>Bicycle, bikes, scooters, cars etc you choose how you make deliveries</p>
        </div>
        </div>
        <Button variant="text" endIcon={<ArrowRightAltIcon />} sx={{ textTransform: 'none', backgroundColor: '#F3F3F3', width: '25%', padding: '0.6rem', color: '#458787', }}>Sign up as a courier</Button>
    </div>
    <div className='column-3'>
      <img src='images/earn-with-qwikway.png' alt='earn' />
      </div>
      </div>
    </div>
  )
}

export default EarnWithQwikway
