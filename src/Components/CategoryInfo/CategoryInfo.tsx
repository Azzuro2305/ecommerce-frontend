import React from "react";
import { Category } from "../Category/Category";
import Images from "../Images/Images";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const CategoryInfo = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 2000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // };

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
    <section className="category-info">
      {/* <Slider {...settings}> */}
      {/* <div>
        <img src={ Images.slider1 } alt="Image 1" style={{width: '100%', height: '500px', objectFit: 'cover'}} />
      </div>
      <div>
        <img src={ Images.slider2 } alt="Image 2" style={{width: '100%', height: '500px', objectFit: 'cover'}} />
      </div>
      <div>
        <img src={ Images.slider3 } alt="Image 3" style={{width: '100%', height: '500px', objectFit: 'cover'}} />
      </div> */}
        <Category image={Images.perfume1} name="Category 1" />
        <Category image={Images.perfume2} name="Category 2" />
        <Category image={Images.perfume3} name="Category 3" />
        <Category image={Images.perfume4} name="Category 4" />
     

      <Category image={Images.perfume1} name="Category 1" />
      <Category image={Images.perfume2} name="Category 2" />
      <Category image={Images.perfume3} name="Category 3" />
      <Category image={Images.perfume4} name="Category 4" />
      {/* </Slider> */}
    </section>
  );
};
