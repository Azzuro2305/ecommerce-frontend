import React from 'react'
import { Link } from 'react-router-dom'

export const Intro = ({ image, title }) => {
  return (
    <div className='intro'>
        <Link to=''>
            <img src={ image } alt="" />
            <h2>{ title }</h2>
        </Link>
    </div>
  )
}
