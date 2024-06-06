import React, { useState } from "react";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { SubTitle } from "../Components/SubTitle/SubTitle";
import { useLocation, useParams } from "react-router-dom";
import Images from "../Components/Images/Images";

export const ProductDetail = () => {
  const location = useLocation();
  // const productDetail = location.state ? location.state.productDetail : null;
  // const productDetail = JSON.parse(localStorage.getItem('product'));
  const productDetail = location.state
    ? location.state.productDetail
    : JSON.parse(localStorage.getItem("product"));
  const { name: productName } = useParams();
  console.log(productDetail);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  
  const [images, setImages] = useState([
    Images.perfume1,
    Images.perfume2,
    Images.perfume3,
    Images.perfume4,
    Images.perfume5,
    Images.perfume6,
  ]);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPreviewPos({ x, y });
  };
  return (
    <>
      <Header />
      <SubTitle pagename={productName} />
      <main className="product-detail">
        <section className="product-detail__preview">
          <div className="product-detail__preview__images">
            <div className="product-detail__preview__images__current-preview">
              <img
                src={selectedImage}
                alt="selected"
                onMouseMove={handleMouseMove}
                style={{
                  transformOrigin: `${previewPos.x}% ${previewPos.y}%`,
                }}
              />
            </div>

            <div className="product-detail__preview__images__selection">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="image"
                  onClick={() => handleImageClick(image)}
                  style={{
                    borderBottom:
                      selectedImage === image
                        ? "3px solid #000"
                        : "1px solid #999999",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="product-detail__preview__intro">
            <div className="product-detail__preview__intro__brand">
              <p>{"Maison Alhambra"}</p>
              <button className='next-btn'>Next</button>
            </div>
            <h2 className="product-detail__preview__intro__name">{"MAISON ALHAMBRA CHANTS TENDERINA EAU DE PARFUM 100ML FOR WOMEN IN INDIA"}</h2>
            <div className="product-detail__preview__intro__discount">
              <h3 className='initial-price'>{"170 $"}</h3>
              <h3 className='discount-price'>{"80 $"}</h3>
              <p>Save {"-34 %"}</p>
            </div>
            <p className="product-detail__preview__intro__availability">
              Availability: <span>{6} left in stock</span>
            </p>
            <div className="product-detail__preview__intro__quantity">
              <p>Qty:</p>
              <div className='product-detail__preview__intro__quantity__counter'>
                    <button
                      onClick={decreaseQuantity}
                    //   style={{ marginRight: "10px" }}
                      className='decrease-btn'
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                    //   style={{ textAlign: "center", width: "50px" }}
                      className='quantity-input'
                    />
                    <button
                      onClick={increaseQuantity}
                    //   style={{ marginLeft: "10px" }}
                      className='increase-btn'
                    >
                      +
                    </button>
              </div>
              <button className='add-to-cart-btn'>Add to cart</button>
            </div>
            <button className='buy-btn'>Buy it now</button>
            <div className="product-detail__preview__intro__options">
              <div>
                <img src={Images.compare} alt="" />
                <p>Compare</p>
              </div>
              <div>
                <img src={Images.favourite} alt="" />
                <p>Add to wishlist</p>
              </div>
              <div>
                <img src={Images.email} alt="" />
                <p>Ask about this product</p>
              </div>
            </div>
            <h4 className="product-detail__preview__intro__product-title">{"Maison Alhambra Chants Tenderina Eau De Parfum 100ml For Women"}</h4>
            <p className='product-detail__preview__intro__product-description'>{"Experience the tender essence of Maison Alhambra Chants Tenderina Eau De Parfum. This 100ml bottle is perfect for the modern woman who wants to feel confident and alluring. With notes of gentle florals and subtle musk, this fragrance will leave you feeling fresh and captivating all day long. (Spritz on a little confidence!)"}</p>
            <h4 className="product-detail__preview__intro__product-note">{"Fragrance Notes -"}</h4>
            <p className='product-detail__preview__intro__product-top-note'>Top Notes - {"Bergamot, Grapefruit blossom & Peach"}</p>
            <p className='product-detail__preview__intro__product-middle-note'>Middle Notes - {"Jasmine, Rose & Iris"}</p>
            <p className='product-detail__preview__intro__product-base-note'>Base Notes - {"White Musk, Vetiver, Vanilla and Patchouli."}</p>
            <hr />
            <div>
              <a href=""><img src="" alt="" />Like</a>
              <a href="">Tweet</a>
              <a href=""></a>
            </div>
            <h4>Guaranteed safe checkout</h4>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </section>
        <section className='product-detail__feedbacks'>

        </section>
        <h1 className='home__title'>Related Product</h1>
        <section className='product-detail__related-product'>

        </section>
        <h1 className='home__title'>Recently Viewed</h1>
        <section className='product-detail__recently-viewed'>

        </section>
      </main>
      <Footer />
    </>
  );
};

// requirements

// 1. brand
// 2. name
// 3. initial price
// 4. discount price
// 5. percenrage saved (can calculate with initial price and discount price)
// 6. availability in number
// 7. description
// 8. notes for that product
