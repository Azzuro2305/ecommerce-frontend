import React from 'react'
import Images from '../Images/Images'

const generateStarRating = (rating) => {
  return [...Array(5)].map((star, i) => {
    const ratingValue = i + 1;
    let starImage = Images.emptyStar;
    if (ratingValue <= rating) starImage = Images.fullStar;
    if (ratingValue - 0.5 === rating) starImage = Images.halfStar;
    return (
      <label key={i}>
        <input type="radio" name="rating" value={ratingValue} />
        <img src={starImage} alt="star" className="star" />
      </label>
    );
  });
}

export const Feedback = ({ message, profile, username, rating }) => {
  return (
    <div className='feedback'>
      <div className='feedback__upper'>
        <p>"{message}"</p>
      </div>
      <div className='feedback__lower'>
        <img className='profile' src={profile} alt="" />
        <div className='feedback__lower__user-info'>
          <h2>{username}</h2>
          <div className="feedback__lower__user-info__star-rating">
            {generateStarRating(rating)}
          </div>
        </div>
      </div>
    </div>
  )
}