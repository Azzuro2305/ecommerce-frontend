import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export const FeedbackSlider = ({ feedbacks }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {feedbacks.map((feedback, index) => (
        <div key={index}>
          <img src={feedback.profile} alt="User profile" />
          <p>{feedback.description}</p>
          <p>Rating: {feedback.rating}</p>
        </div>
      ))}
    </Slider>
  );
};

// export default FeedbackSlider;