import React from 'react'
import book1 from '../Home/hp.png'
const DProduct = () => {
    return (
     <>
     <div class="container-fluid">
        <div class="cart">
            <div class="row row1">
                <div class="img-book-product">
                        <img src={book1} class="small-img"/>
                        <img src={book1}  class="small-img"/>
                        <img src={book1}  class="small-img"/>
                        <img src={book1}  class="small-img"/>
                </div>
                <div>
                    <h1 class="product-title">Advanced Engineering Mathematics (AEM) for Semester - 5</h1>
                    <div class="reviews">
                        <i class="fas fa-star">⭐</i>
                        <i class="fas fa-star">⭐</i>
                        <i class="fas fa-star">⭐</i>
                        <i class="fas fa-star-half-alt">⭐</i>
                        <i class="far fa-star">⭐</i>
                        <p>240 reviews</p>
                    </div>
                    <div class="price">
                        <span>$38.00</span>
                        <span>$49.99</span>
                    </div>
                    <div id="product" class="product-inf">
                        <ul>
                          <li class="active"><a href="#Description">Product Description</a></li>
                          <li><a href="#Details">Product Details</a></li>
                        </ul>
                        <div class="tabs-content">
                            <div id="Description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, inventore magnam! Natus, quibusdam ea? Modi nemo corrupti alias quae quis.</p>
                            </div>
                            <div id="Details" >
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sequi eaque quisquam corrupti reprehenderit exercitationem iusto asperiores quae commodi quo?</p>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="#" class="custom-btn">Add To Cart <i class="fas fa-angle-right"></i></a>
                            </div>
                            <div class="col-md-6">
                                <a href="#" class="custom-btn">Buy Now <i class="fas fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </>
    )
}

export default DProduct
