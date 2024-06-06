import React from 'react'
import Images from '../Images/Images'
import { Product } from '../Product/Product'

export const ProductList = () => {
  return (
    <section className='product-list'>
      <div className='product-list__category'>
        <div className='product-list__category__view'>
          <div className='product-list__category__view__options'>
            <input type="radio" id="grid-view" value="grid-view" name="product" className='grid-radio' /> 
            <label for="grid-view" class="visually-hidden">Grid View</label>
            <input type="radio" id="list-view" value="list-view" name="product" className='list-radio' /> 
            <label for="list-view" class="visually-hidden">List View</label>
          </div>
          <p>Showing {"1"} - {"21"} of {"948"} result</p>
        </div>
        {/* <div className='product-list__category__result'>
          
        </div> */}
        <div className='product-list__category__sort'>
          <label htmlFor="">Sort by:</label>
          <select name="" id="">
            <option value="" selected>Featured</option>
            <option value="">Best Selling</option>
            <option value="">Alphabetically, A-Z</option>
            <option value="">Alphabetically, Z-A</option>
            <option value="">Price, low to high</option>
            <option value="">Price, high to low</option>
            <option value="">Date, old to new</option>
            <option value="">Date, new to old</option>
          </select>
        </div>
      </div>
      <div className='product-list__display'>
      <Product status={"-39%"} type={"Perfume"} name={"Afnan 9PM EDP For Men - 100ml"} initialPrice={"120 $"} discountPrice={"70 $"} image={Images.perfume17} inStock={false}/>
      <Product status={"-39%"} type={"Perfume"} name={"Afnan 9PM EDP For Men - 100ml"} initialPrice={"120 $"} discountPrice={"70 $"} image={Images.perfume17} inStock={false}/>
      <Product status={"-39%"} type={"Perfume"} name={"Afnan 9PM EDP For Men - 100ml"} initialPrice={"120 $"} discountPrice={"70 $"} image={Images.perfume17} inStock={false}/>

      <Product status={"-39%"} type={"Perfume"} name={"Afnan 9PM EDP For Men - 100ml"} initialPrice={"120 $"} discountPrice={"70 $"} image={Images.perfume17} inStock={false}/>
      <Product status={"-39%"} type={"Perfume"} name={"Afnan 9PM EDP For Men - 100ml"} initialPrice={"120 $"} discountPrice={"70 $"} image={Images.perfume17} inStock={false}/>
      <Product status={"-39%"} type={"Perfume"} name={"Afnan 9PM EDP For Men - 100ml"} initialPrice={"120 $"} discountPrice={"70 $"} image={Images.perfume17} inStock={false}/>

      <Product status={"-39%"} type={"Perfume"} name={"Afnan 9PM EDP For Men - 100ml"} initialPrice={"120 $"} discountPrice={"70 $"} image={Images.perfume17} inStock={false}/>
      <Product status={"-39%"} type={"Perfume"} name={"Afnan 9PM EDP For Men - 100ml"} initialPrice={"120 $"} discountPrice={"70 $"} image={Images.perfume17} inStock={false}/>
      <Product status={"-39%"} type={"Perfume"} name={"Afnan 9PM EDP For Men - 100ml"} initialPrice={"120 $"} discountPrice={"70 $"} image={Images.perfume17} inStock={false}/>
      </div>
    </section>
  )
}
