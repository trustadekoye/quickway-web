import React from 'react'
import './Features.css'
import { Button } from '@mui/material'
import { ReactComponent as CashIcon } from '../components/icons/moneys.svg'
import { ReactComponent as TrackingIcon } from '../components/icons/realtime.svg'
import { ReactComponent as AddressIcon } from '../components/icons/map.svg'
import { ReactComponent as MessageIcon } from '../components/icons/messages.svg'
import { ReactComponent as SupportIcon } from '../components/icons/support.svg'
import { ReactComponent as RewardsIcon } from '../components/icons/coin.svg'

export const FeaturesList = [
  {
    id: 1,
    title: 'Pay with cash',
    description: 'Incase you are worried about making transfers, you can pay for your deliveries with cash.',
    icon: <CashIcon />
  },
  {
    id: 2,
    title: 'Real-time package tracking',
    description: 'You can monitor and see your package move from pick-up to drop-off on the live app.',
    icon: <TrackingIcon />
  },
  {
    id: 3,
    title: 'Saved Addresses',
    description: 'You can save your addresses for next time, so you won\'t have to type it again.',
    icon: <AddressIcon />
  },
  {
    id: 4,
    title: 'Message your riders',
    description: 'You can follow up with your riders as they pick-up and deliver your package on the app.',
    icon: <MessageIcon />
  },
  {
    id: 5,
    title: 'Fast & reliable support',
    description: 'Our support and help center are 24/7 and are ready to help you anytime.',
    icon: <SupportIcon />
  },
  {
    id: 6,
    title: 'Rewards & Bonuses',
    description: 'As you use the Qwikway app more you can get reward overtime with extra cash!',
    icon: <RewardsIcon />
  }
]

function Features() {
  return (
    <div className='features_list'>
      {FeaturesList.map((feature) => (
        <div className='feature' key={feature.id}>
          <div className='features'>
          <div className='feature_icon'>{feature.icon}</div>
          <div className='featuresss'>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p></div>
          </div>
        </div>
      ))}
      <Button className='btns' variant='contained' sx={{ textTransform: 'none', width: '48%', backgroundColor: '#458787', padding: '0.8rem', borderRadius: '15px' }}>Get the app</Button>
    </div>
  )
}

export default Features


