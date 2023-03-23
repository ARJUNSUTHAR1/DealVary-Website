import React, { useState } from 'react'
import { MdDoneAll } from 'react-icons/md'
import { IoIosArrowRoundBack } from 'react-icons/io'
const PlaceOrder = () => {
  const[toggle,setToggle] = useState(0)
  console.log(toggle)
 
  return (
    <>
      <div className="place-main-container">
        <div className="place-content">
          <div className="title">
            <IoIosArrowRoundBack />
            <h1>Payment Methods</h1>
          </div>

          {/* mycart option */}
          <div className="cart-edit">
            <div className="cart-details">
              <MdDoneAll />
              <p>My Cart</p>
            </div>
            <div className="cart-status-btn">
              {/* It wil be Dynammic   */}
              <button>Change</button>
            </div>
          </div>

          {/* shipping option */}
          <div className="cart-edit">
            <div className="cart-details">
              <MdDoneAll />
              <p>Shipping Details</p>
            </div>
            <div className="cart-status-btn">
              {/* It wil be Dynammic   */}
              <button>Change</button>
            </div>
          </div>


          <div className="cart-edit">
            <div className="cards">
              <div className="debit">
                <input type="radio" checked= {toggle == 1 ? true : false} onChange={()=> setToggle(1)} value='Debit/Credit Card' />
                <p>Debit/Credit card</p>
              </div>
              <div className="netBank">
                <input type="radio" checked= {toggle == 2 ? true : false} onChange={()=> setToggle(2)} value='Debit/Credit Card' />
                <p>Net Banking</p>
              </div>

            </div>
            <div className="row-2">
              <div className="upi">
                <input type="radio" checked= {toggle == 3 ? true : false} onChange={()=> setToggle(3)} />
                <p>UPI(Unified Payement Interface)</p>
              </div>

              <div className="cod">
                <input type="radio" checked= {toggle == 4 ? true : false} onChange={()=> setToggle(4)} value='Debit/Credit Card' />
                <p>Cash on Delivery (COD)</p>
              </div>

            </div>
          </div>

          <div className="cart-edit place-btn">
            <button>Place Order</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlaceOrder
