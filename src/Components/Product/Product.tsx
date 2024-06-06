import React, { useState } from "react";
import Images from "../Images/Images";
import { Link } from 'react-router-dom';

export const Product = ({
  status,
  type,
  name,
  initialPrice,
  discountPrice,
  image,
  inStock
}) => {
  const [imgSrc, setImgSrc] = useState({
    favourite: Images.favourite,
    compare: Images.compare,
    search: Images.search,
  });

  const productDetail = {
    status,
    type,
    name,
    initialPrice,
    discountPrice,
    image,
    inStock
  };

  const navigateToProductDetail = (product) => {
    localStorage.setItem('product', JSON.stringify(product));
  };
  

  return (
    // <Link to= {`/product-detail/${name}`} className="no-decoration">
    <Link to={{
      pathname: `/product-detail/${name}`,
      state: { productDetail }
    }} className='no-underline' onClick={() => navigateToProductDetail(productDetail)}>
      <div className="product">
        <div className="product__upper">
          <img className="product__upper__brand" src={image} alt="" />
          <div>
            <p style={{ backgroundColor: inStock ? '#000' : '#BB9B61' }}>{inStock ? status : <span className="status">Soldout</span>}</p>
            <div className="product__upper__options">
              <button>
                <img
                  src={imgSrc.favourite}
                  alt="favourite-icon"
                  onMouseOver={() =>
                    setImgSrc({ ...imgSrc, favourite: Images.favouriteGold })
                  }
                  onMouseOut={() =>
                    setImgSrc({ ...imgSrc, favourite: Images.favourite })
                  }
                />
              </button>
              <button>
                <img
                  src={imgSrc.compare}
                  alt="compare-icon"
                  onMouseOver={() =>
                    setImgSrc({ ...imgSrc, compare: Images.compareGold })
                  }
                  onMouseOut={() =>
                    setImgSrc({ ...imgSrc, compare: Images.compare })
                  }
                />
              </button>
              <button>
                <img
                  src={imgSrc.search}
                  alt="search-icon"
                  onMouseOver={() =>
                    setImgSrc({ ...imgSrc, search: Images.searchGold })
                  }
                  onMouseOut={() =>
                    setImgSrc({ ...imgSrc, search: Images.search })
                  }
                />
              </button>
            </div>
          </div>
          <div className="product__upper__container">
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>

        <div className="product__lower">
          <p className="product-type">{type}</p>
          <h2 className="product-name">{name}</h2>
          <div className="product__lower__pricing">
            <h3 className="initial-price">{initialPrice}</h3>
            <h3 className="discount-price">{discountPrice}</h3>
          </div>
        </div>
      </div>
      </Link>
  );
};

// style={{backgroundImage: `url(${ Images.slider1 })`}}
