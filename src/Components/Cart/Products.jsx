import React from 'react'
import ProductDesc from './ProductDesc'

const Products = () => {
  return (
    <>
      <div className="products-section">
        <ProductDesc />
        <div className="product-features">
          <div className="quality">
            Quality
          </div>
          <div className="remove">
            Remove
          </div>
          <div className="Price">
            Price
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
