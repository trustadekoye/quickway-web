import React from 'react'
import './ReviewCard.css'
import ReviewsComponent from './ReviewsComponent'

function ReviewsCard() {
  return (
    <div className='carddd'>
    <div className='card-main'>
        <div className='heading'>
            <h2>Join thousands of happy customers</h2>
            <p>You've heard enough from us, hear from our customers</p>
            </div>
            <div className='reviews'>
                <ReviewsComponent />
            </div>
            </div>
    </div>
  )
}

export default ReviewsCard
