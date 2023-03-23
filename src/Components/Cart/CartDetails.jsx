import React from 'react'
import Products from './Products'

const CartDetails = () => {
  return (
    <>
        <div className="details-title">
            <div className="description">
                Description
            </div>
            <div className="others">
                <p>Quantity</p>
                <p>Remove</p>
                <p>Price</p>
            </div>
        </div>
        <div className="cart-products">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
        </div>
    </>
  )
}

export default CartDetails
