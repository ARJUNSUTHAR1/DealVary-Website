import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'


const Shipment = () => {
  return (
    <>
      <div className="ship-main-container">
        <div className="ship-content">
          <div className="top">
            <IoIosArrowRoundBack />
            <h1>Shipping Details</h1>
          </div>
          <div className="shipment-details">
            <form action="#">
              <div className="name">
                <input type="text" placeholder='Enter your first name' />
                <input type="text" placeholder='Enter your last name' />
              </div>

              <div className="phone">
                <input type="" placeholder='Enter your phone number' />
                <input type="text" placeholder='Enter your email address' />
              </div>

              <div className="name">
                <input type="text" placeholder='Enter your state' />
                <input type="text" placeholder='Enter your district' />
              </div>

              <div className="address">
                <textarea name="" placeholder='Enter your permanent address'></textarea>
              </div>

              <div className="locality">
                <input type="text" placeholder='Enter your house no' />
                <input type="text" placeholder='Enter your street no' />
              </div>
              <div className="pay-btn">
                <Link to="/paynow">
                  <button>Pay Now</button>
                </Link>
              </div>
            </form>
          </div>
      </div>
    </div>
    </>
  )
}

export default Shipment
