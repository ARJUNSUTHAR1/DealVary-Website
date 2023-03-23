import React from 'react'

import book1 from '../Home/hp.png'


const ProductDetail = () => {
  return (
    <section className='product-deatil'>
      <div className="detail">
        <div className="product-imgs">
          <img src={book1} alt="" />
          <img src={book1} alt="" />
          <img src={book1} alt="" />
          <img src={book1} alt="" />
        </div>
        <div className="title-price">
           <p>Advanced Engneering <br /> Mathematics (AEM) for <br /> Semester-5</p>
           <div>
            <h1>₹ 150<span>₹ 550</span></h1>
           </div>
           <div className="buy-add-button">
            <button>Buy Now</button>
            <button>ADD TO CART</button>
           </div>
        </div>
        <div className="description">
            <h3>ABOUT THIS BOOK</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium commodi sapiente rem necessitatibus animi optio, iste vero, dolorem vel corporis nam dolore facere?</p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
