import React from 'react';
import Slider from 'react-slick';
import Images from '../Images/Images';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export const MySlider = () => {
  const settings = {
    // dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={ Images.slider1 } alt="Image 1" style={{width: '100%', height: '500px', objectFit: 'cover'}} />
      </div>
      <div>
        <img src={ Images.slider2 } alt="Image 2" style={{width: '100%', height: '500px', objectFit: 'cover'}} />
      </div>
      <div>
        <img src={ Images.slider3 } alt="Image 3" style={{width: '100%', height: '500px', objectFit: 'cover'}} />
      </div>
    </Slider>
  );
};

export default MySlider