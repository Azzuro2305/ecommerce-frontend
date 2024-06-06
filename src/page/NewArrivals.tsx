import React from "react";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { SubTitle } from "../Components/SubTitle/SubTitle";
import { CategorySetting } from "../Components/CategorySetting/CategorySetting";
import { ProductList } from "../Components/ProductList/ProductList";

export const NewArrivals = () => {
  return (
    <>
      <Header />
      <SubTitle pagename={"New Arrivals"} />
      <main className="new-arrivals">
        <CategorySetting />
        <ProductList />
      </main>
      <Footer />
    </>
  );
};
