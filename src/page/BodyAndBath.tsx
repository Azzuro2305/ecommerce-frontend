import React from 'react'
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { SubTitle } from "../Components/SubTitle/SubTitle";
import { CategorySetting } from "../Components/CategorySetting/CategorySetting";
import { ProductList } from "../Components/ProductList/ProductList";

export const BodyAndBath = () => {
  return (
    <>
      <Header />
      <SubTitle pagename={"body & bath"} />
      <main className="bodyandbath">
        <CategorySetting />
        <ProductList />
      </main>
      <Footer />
    </>
  )
}
