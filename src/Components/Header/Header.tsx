import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Images from '../Images/Images'

export const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <marquee className='discount-code' behavior="" direction="left">GET 10% OFF ON ALL ORDERS USE COUPON CODE-FRAG10 <span>COD AVAILABLE</span></marquee>
        <header className='header'>
            <div className='header__upper-nav'>
            <div className="header__upper-nav__search">
                <img src={ Images.search } alt="search" />
                <input type="text" placeholder="Search..." />
            </div>
                <div className='header__upper-nav__logo'>
                    <img src={ Images.logo } alt="" />
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to='/profile'>
                                <img className='link-icon' src={ Images.profile } alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to='/wishlist'>
                                <img className='link-icon' src={ Images.favourite } alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to='/shopping-cart'>
                                <img className='link-icon' src={ Images.bag } alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <nav className='header__lower-nav'>
                <ul>
                    <li>
                        <Link to='/new-arrivals'>NEW ARRIVALS</Link>
                    </li>
                    <li>
                        <Link to='/best-seller'>BEST SELLER</Link>
                    </li>
                    <li>
                        <Link to='/men'>MEN</Link>
                    </li>
                    <li>
                        <Link to='/women'>WOMEN</Link>
                    </li>
                    <li className='header__lower-nav__body-bath'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to='/body-and-bath'>BODY & BATH</Link>
            <img src={ Images.downArrow } alt="gg" />
            {isHovered && (
                <div className="dropdown">
                    <Link to=''>Deodorant</Link>
                    <Link to=''>Deodorant Stick</Link>
                    <Link to=''>Aftershave</Link>
                </div>
            )}
        </li>
                    <li>
                        <Link to='/miniatures'>MINIATURES</Link>
                    </li>
                    <li>
                        <Link to='/shop-by-brands'>SHOP BY BRANDS</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}
