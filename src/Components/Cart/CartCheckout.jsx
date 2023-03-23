import React from 'react'
import { Link } from 'react-router-dom'
// import NK from '../Cart/nk.jpg'

const CartCheckout = () => {
  return (
    <>
      <div className="checkout-content">
        <div className="checkout-title">
          <p>Order Summary</p>
        </div>
        <aside className="checkout-price">
          <div className="first">
            <h5>Delivery</h5>
            <h5>₹20</h5>
          </div>
          <div className="second">
            <h5>Taxes</h5>
            <h5>₹50</h5>
          </div>
          <div className="third">
            <h3>Total</h3>
            <h3>₹570</h3>
          </div>
        </aside>
        <div className="checkout-btn">
          <Link to='/checkout'>
            <button>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CartCheckout
