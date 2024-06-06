import React from 'react'
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { SubTitle } from "../Components/SubTitle/SubTitle";
import { CategorySetting } from "../Components/CategorySetting/CategorySetting";
import { ProductList } from "../Components/ProductList/ProductList";

export const Men = () => {
  return (
    <>
      <Header />
      <SubTitle pagename={"Men"} />
      <main className="men">
        <CategorySetting />
        <ProductList />
      </main>
      <Footer />
    </>
  )
}
