import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './ReviewCard.css'

const ReviewsList = [
    {
        id: 1,
        text: '"They was Quick and Efficient, delivered with care, friendly. I was highly impressed with my courier, Michael!"',
        name: "Tunde from Ibadan",
        rating: 5,
    },
    {
        id: 2,
        text: '"Very Effieient, fast, cost-friendly and attentive to details. 100% recommend!"',
        name: "Tunde from Ibadan",
        rating: 5,
    },
    {
        id: 3,
        text: "They was Quick and Efficient, delivered with care, friendly. I was highly impressed with my courier, Michael!",
        name: "Tunde from Ibadan",
        rating: 5,
    },
    {
        id: 4,
        text: '"My Courier was very attentive, very patient and follows instructions to the latter. 100% recommend! Package was also delivered fast and safe!"',
        name: "Tunde from Ibadan",
        rating: 5,
    },
    {
        id: 5,
        text: "They was Quick and Efficient, delivered with care, friendly. I was highly impressed with my courier, Michael!",
        name: "Tunde from Ibadan",
        rating: 5,
    },
    {
        id: 6,
        text: "They was Quick and Efficient, delivered with care, friendly. I was highly impressed with my courier, Michael!",
        name: "Tunde from Ibadan",
        rating: 3,
    },
    {
        id: 7,
        text: "They was Quick and Efficient, delivered with care, friendly. I was highly impressed with my courier, Michael!",
        name: "Tunde from Ibadan",
        rating: 5,
    },
    {
        id: 8,
        text: "They was Quick and Efficient, delivered with care, friendly. I was highly impressed with my courier, Michael!",
        name: "Tunde from Ibadan",
        rating: 5,
    },
    {
        id: 9,
        text: "They was Quick and Efficient, delivered with care, friendly. I was highly impressed with my courier, Michael!",
        name: "Tunde from Ibadan",
        rating: 4,
    },
]

function ReviewsComponent() {
    return (
        <div className="reviewss">
          {ReviewsList.map((review) => (
            <div className="review" key={review.id}>
              <p className="review-text">{review.text}</p>
              <div className="review-info">
              <img src='/images/Avatar.png' alt='review' className='avatar' />
                <div className='review-info-card'>
                <span className="review-name">{review.name}</span>
                <span className="star-rating">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <StarIcon key={index} fontSize="small" className='star-icon'/>
                  ))}
                </span></div>
              </div>
            </div>
          ))}
        </div>
      );
}


export default ReviewsComponent
