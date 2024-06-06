import React from 'react'
import Images from '../Images/Images'

export const Footer = () => {
  return (
    <>
        <footer>
            <section className='upper'>
                <div className='upper__logo'>
                    <img src={ Images.logo } alt="" />
                </div>
                <div className='upper__contact'>
                    <h2>Contact Us</h2>
                    <div className='upper__contact__address'>
                        <img src={ Images.home } alt="" />
                        <p>Junction City, Bogyoke Road, Yangon, 1245151</p>
                    </div>
                    <div className='upper__contact__email'>
                        <img src={ Images.email } alt="" />
                        <a href="">fragranceheaven@gmail.com</a>
                    </div>
                    <div className='upper__contact__email'>
                        <img src={ Images.phone } alt="" />
                        <a href="">+95 956873985</a>
                    </div>
                </div>
                <div className='upper__help-center'>
                    <h2>Help Center</h2>
                    <a href="">Contact Us</a>
                    <a href="">Terms and Conditions</a>
                    <a href="">Shipping and Returns</a>
                </div>
                <div className='upper__followus'>
                    <h2>Follow Us</h2>
                    <div className='upper__followus__links'>
                        <img src={ Images.facebook } alt="facebook" />
                        <img src={ Images.instagram } alt="instagram" />
                        <img src={ Images.twitter } alt="twitter" />
                        <img src={ Images.youtube } alt="youtube" />
                        <img src={ Images.whatsapp } alt="whatsapp" />
                    </div>
                </div>
            </section>
            <section className='lower'>
                
                <div className='lower__info'>
                <h2>Signup for newsletter</h2>
                <form>
                    <div className='user-email'>
                        <input type="email" placeholder="email@example.com" />
                        <input type="submit" value="Subscribe" />
                    </div>
                    <div className='user-agreement'>
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">I agree to the Terms and Service</label>
        </div>
                </form>   
                </div>
                <div>
                        <img src={ Images.payments } alt="" />
                    </div>
            </section>
        </footer>
    </>
  )
}
