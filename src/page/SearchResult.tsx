import React from 'react'
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { SubTitle } from "../Components/SubTitle/SubTitle";

export const SearchResult = ({ name }) => {
  return (
    <>
        <Header />
        <SubTitle pagename={name} />
        <main className='search-result'>

        </main>
        <Footer />
    </>
  )
}
