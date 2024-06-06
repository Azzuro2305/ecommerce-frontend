import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NewArrivals } from '../../page/NewArrivals';
import { BestSeller } from '../../page/BestSeller';
import { Men } from '../../page/Men';
import { Women } from '../../page/Women';
import { BodyAndBath } from '../../page/BodyAndBath';
import { Miniatures } from '../../page/Miniatures';
import { ShopByBrands } from '../../page/ShopByBrands';
import { Registration } from '../../page/Registration';
import { Login } from '../../page/Login';
import { Home } from '../../page/Home';
import { SearchResult } from '../../page/SearchResult';
import { ProductDetail } from '../../page/ProductDetail';
import { Profile } from '../../page/Profile';
import { ShoppingCart } from '../../page/ShoppingCart';
import { Wishlist } from '../../page/Wishlist';
import { Checkout } from '../../page/Checkout';

export const Router = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/best-seller" element={<BestSeller />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/body-and-bath" element={<BodyAndBath />} />
              <Route path="/miniatures" element={<Miniatures />} />
              <Route path="/shop-by-brands" element={<ShopByBrands />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product-detail/:name?" element={<ProductDetail />} />
              <Route path="/product-detail" element={<ProductDetail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/search-result" element={<SearchResult />} />
              <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}
