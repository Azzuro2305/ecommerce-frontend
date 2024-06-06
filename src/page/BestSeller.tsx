import React from 'react'
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { SubTitle } from "../Components/SubTitle/SubTitle";
import { CategorySetting } from "../Components/CategorySetting/CategorySetting";
import { ProductList } from "../Components/ProductList/ProductList";

export const BestSeller = () => {
  return (
    <>
      <Header />
      <SubTitle pagename={"Best selling products"} />
      <main className='best-seller'>
        <CategorySetting />
        <ProductList />
      </main>
      <Footer />
    </>
  )
}
