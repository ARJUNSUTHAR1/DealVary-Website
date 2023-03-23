import React from 'react'
import {IoIosArrowRoundBack} from 'react-icons/io'
import CartCheckout from './CartCheckout'
import CartDetails from './CartDetails'

const Cart = () => {
  return (
    <>
        <div className="cart-main-container">
            <div className="cart-content">
                <div className="cart-title">
                    <IoIosArrowRoundBack />
                    <h1>My Shopping Cart</h1>
                </div>
                <div className="cart-features">
                    <div className="cart-details">
                        <CartDetails />
                    </div>
                    <div className="cart-checkout">
                        <CartCheckout />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart
