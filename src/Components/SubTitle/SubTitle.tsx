import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../Images/Images'

export const SubTitle = ({ pagename }) => {
  return (
    <section className='subtitle'>
        <h1>{pagename}</h1>
        <div className='subtitle__current-page'>
          <Link to='/'><img src={Images.home1} alt="home icon" /></Link>
          <p><span>/</span>{pagename}</p>
        </div>
    </section>
  )
}
