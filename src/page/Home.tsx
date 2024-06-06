import React, { useState, useEffect } from "react";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Intro } from "../Components/Intro/Intro";
import { Product } from "../Components/Product/Product";
import { ServiceInfo } from "../Components/ServiceInfo/ServiceInfo";
import { CategoryInfo } from "../Components/CategoryInfo/CategoryInfo";
import { FeedbackSlider } from "../Components/FeedbackSlider/FeedbackSlider";
import { Feedback } from "../Components/Feedback/Feedback";
import Images from "../Components/Images/Images";
import { Link } from "react-router-dom";

export const Home = () => {
  const Slider = React.lazy(() => import("../Components/MySlider/MySlider"));
  const feedbacks = useState({
    profile: Images.perfume1,
    description: "This is the best product I have ever bought",
    rating: 5,
    profile: Images.perfume2,
    description: "This is the best product I have ever bought",
    rating: 4,
    profile: Images.perfume3,
    description: "This is the best product I have ever bought",
    rating: 3,
    profile: Images.perfume4,
    description: "This is the best product I have ever bought",
    rating: 2,
    profile: Images.perfume5,
    description: "This is the best product I have ever bought",
    rating: 1,
  });


  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <main className="home">
      <Header />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Slider />
      </React.Suspense>
      <h1 className="animated-title">Embrace the extraordinary</h1>
      <section className="home__intro">
        <Intro image={Images.givenchy2} title={"NEW ARRIVAL"} />
        <Intro image={Images.chanel2} title={"BEST SELLER"} />
      </section>
      <h1 className="animated-title">Exclusive Products</h1>
      <section className="home__exclusive-products">
        <Link
          to={{
            pathname: "/product-detail",
            state: { name: "name" },
          }}
        >
          <Product
            status={"-39%"}
            type={"Perfume"}
            name={"Afnan 9PM EDP For Men - 100ml"}
            initialPrice={"120 $"}
            discountPrice={"70 $"}
            image={Images.perfume1}
            inStock={false}
          />
        </Link>

        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume2}
          inStock={true}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume3}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume4}
        />

        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume5}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume6}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume7}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume8}
        />
      </section>
      <h1 className="animated-title">New Arrivals</h1>
      <section className="home__exclusive-products">
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume9}
          inStock={false}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume10}
          inStock={true}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume11}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume12}
        />

        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume13}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume14}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume15}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume16}
        />
      </section>
      <h1 className="animated-title">Popular Categories</h1>
      <CategoryInfo />
      <h1 className="animated-title">Miniature Collection</h1>
      <section className="home__exclusive-products">
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume17}
          inStock={false}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume18}
          inStock={true}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume19}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume20}
        />

        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume21}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume22}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume23}
        />
        <Product
          status={"-39%"}
          type={"Perfume"}
          name={"Afnan 9PM EDP For Men - 100ml"}
          initialPrice={"120 $"}
          discountPrice={"70 $"}
          image={Images.perfume24}
        />
      </section>
      {/* <FeedbackSlider feedbacks={feedbacks}/> */}
      <h1 className="animated-title">Feedbacks</h1>
      <section className="home__feedbacks">
        <Feedback
          message={
            "hello gfsg fg sfggsdfg sfg fad fadf fdasf fdsaf fdsaf fdas fasd fasdfasdf fasddfsd fdasfadsf fasdfsd fsda hello gfsg fg sfggsdfg sfg fad fadf fdasf fdsaf fdsaf fdas fasd fasdfasdf fasddfsd fdasfadsf fasdfsd fsda hello gfsg fg sfggsdfg sfg fad fadf fdasf fdsaf fdsaf fdas fasd fasdfasdf fasddfsd fdasfadsf fasdfsd fsda"
          }
          profile={"image.png"}
          username={"John"}
          rating={3.5}
        />
        <Feedback message={"hello"} profile={"image.png"} username={"John"} />
        <Feedback message={"hello"} profile={"image.png"} username={"John"} />
      </section>
      <ServiceInfo />
      <Footer />
      {isVisible && (
        <div className='scroll-to-top-btn' onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }}>
          <button><img src={Images.scrollToTopBtn} alt="" /></button>
        </div>
      )}
    </main>
  );
};
