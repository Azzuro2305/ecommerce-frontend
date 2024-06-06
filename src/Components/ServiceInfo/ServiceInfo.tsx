import React from 'react'
import Images from '../Images/Images'

export const ServiceInfo = () => {
  return (
    <section className='service'>
        <div className='service__type'>
            <img src={ Images.airplane } alt="" />
            <div className='service__type__description'>
                <h2>Free Shipping</h2>
                <p>Free Shipping on All Orders</p>
            </div>
        </div>
        <div className='service__type'>
            <img src={ Images.customerService } alt="" />
            <div className='service__type__description'>
                <h2>Support 24/7</h2>
                <p>Support 24 hours a day</p>
            </div>
        </div>
        <div className='service__type'>
            <img src={ Images.moneyReturn } alt="" />
            <div className='service__type__description'>
                <h2>Money Return</h2>
                <p>Read Shipping & Return</p>
            </div>
        </div>
        <div className='service__type'>
            <img src={ Images.paymentSecure } alt="" />
            <div className='service__type__description'>
                <h2>100% Payment Secure</h2>
                <p>We ensure secure payment</p>
            </div>
        </div>
    </section>
  )
}
