import React from "react";
import Images from "../Images/Images";

export const CategorySetting = ({ instock, outOfStock }) => {
  return (
    <section className="category-setting">
      <form action="">
        <div className="category-setting__availability">
          <div className='category-setting__availability__title'>
            <h2>Availability</h2>
            <img src={Images.uparrow1} alt="" />
          </div>
          <hr />
          <div className='category-setting__availability__instock'>
            <input type="checkbox" />
            <label htmlFor="">In Stock ({})</label>
          </div>
          <div className='category-setting__availability__out-of-stock'>
            <input type="checkbox" />
            <label htmlFor="">Out Of Stock ({})</label>
          </div>
        </div>

        <div className="category-setting__price">
          <div className='category-setting__price__title'>
            <h2>Price</h2>
            <img src={Images.uparrow1} alt="" />
          </div>
          <hr />
          <div className='category-setting__price__price-input'>
            <label htmlFor="">
              <span>$</span>
              <input type="number" placeholder="0" />
              <span>From</span>
            </label>
            <label htmlFor="">
            <span>$</span>
              <input type="number" placeholder="1000" />
              <span>To</span>
            </label>
          </div>
        </div>
        <input type="submit" value="Filter" />
      </form>

      {/* <img src={Images.downArrow} alt="gg" />
      {isHovered && (
        <div className="dropdown">
          <Link to="">Deodorant</Link>
          <Link to="">Deodorant Stick</Link>
          <Link to="">Aftershave</Link>
        </div>
      )} */}
    </section>
  );
};
