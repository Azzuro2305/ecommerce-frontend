import React from 'react'
import Images from '../Images/Images'

export const Category = ({ image, name }) => {
  return (
    <div className='category'>
        <img src={ image } alt="" />
        <h2>{ name }</h2>
    </div>
  )
}
