import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../Components/Images/Images'

export const Checkout = () => {
  return (
    <>
        <header className='checkout-header'>
          <Link to='/'><img className='checkout-header__logo' src={Images.logo} alt="" /></Link>
          <Link to='/shopping-cart'><img className='checkout-header__icon' src={Images.bag} alt="" /></Link>
        </header>
        <hr />
        <main className='checkout-body'>
            <section className='checkout-body__payment'>
              <div className='checkout-body__payment__inner'>
                <form action="">
                    <div className='contact-label'>
                      <label htmlFor="">Contact</label>
                      <Link to='/login'>Login</Link>
                    </div>
                    <input className='contact-info' type="text" />
                    <div className='contact-checkbox'>
                      <label htmlFor="">
                      <input type="checkbox" />
                      <span>Email me with news and offers</span>
                      </label>
                    </div>
                    <div className='delivery'>
                      <select name="" id="">
                        <option value=""></option>
                      </select>
                    </div>
                  </form>
              </div>

                <div className='checkout-body__payment__items'>
                  <div className='checkout-body__payment__items__inner'>
                    <h3>Items</h3>
                    <p>1 x Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  </div>
                </div>
            </section>
        </main>
    </>
  )
}
