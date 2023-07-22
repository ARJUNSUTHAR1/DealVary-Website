import React from 'react'
import NK from '../Cart/nk.jpg'


const ProductDesc = () => {
    return (
        <>
            <div className="product-description">
                <div className="image">
                    <img src={NK} alt="" />
                </div>
                <div className="product-about">
                    
                    <div className='bookname'>AEM : Advanced Engineering Mathematics</div>
                    <div className="author">
                        <p>AUTHOR : PROF K.C. SARGANGI &MORE</p>
                    </div>
                    <p>⭐⭐⭐⭐⭐ 4.8</p>
                </div>
            </div>
        </>
    )
}

export default ProductDesc
