import React from 'react'
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { SubTitle } from "../Components/SubTitle/SubTitle";

export const Wishlist = () => {
  return (
    <>
      <Header />
      <SubTitle pagename={"Wishlist"} />
      <main className="wishlist">
      </main>
      <Footer />
    </>
  )
}
