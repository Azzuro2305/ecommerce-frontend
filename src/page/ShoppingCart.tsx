import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { SubTitle } from "../Components/SubTitle/SubTitle";

export const ShoppingCart = () => {
    // const products = [
    //     {
    //         image: '',
    //         name: '',
    //         price: 0,
    //         quantity: 1,
    //         total: 0
    //     }
    // ]
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/checkout');
    }

  return (
    <>
      <Header />
      <SubTitle pagename={"Shopping Cart"} />
      <main className="shopping-cart">
        <section className='shopping-cart__summary'>
            <form onSubmit={handleSubmit} action="">
                    <table className='item-table'>
                        <tr className='table-title'>
                            <td>
                                Image
                            </td>
                            <td>
                                Product
                            </td>
                            <td>
                                Price
                            </td>
                            <td>
                                Quantity
                            </td>
                            <td>
                                Total
                            </td>
                            <td>
                                Remove
                            </td>
                        </tr>

                        <tr>
                            <td>

                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                    </table>
                    <div className='shopping-cart__summary__options'>
                        <button>Continue Shopping</button>
                        <button>Clear Cart</button>
                    </div>


                <div className='shopping-cart__summary__net'>
                    <div className='shopping-cart__summary__net__instruction'>
                        <h2>Special instruction for seller</h2>
                        <input type="textarea" />
                    </div>
                    <div className='shopping-cart__summary__net__total'>
                        <h2>Cart Totals</h2>
                        <table className='price-table'>
                            <tr>
                                <td>
                                    Subtotal
                                </td>
                                <td>
                                    {/* {subtotal} */}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Total
                                </td>
                                <td>
                                    {/* {total} */}
                                </td>
                            </tr>
                        </table>
                        <input type="submit" value='Proceed to Checkout' />
                    </div>
                </div>
            </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
