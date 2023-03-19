import React from 'react'
import { Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import book1 from '../Home/bookj1.jpg'
import book2 from '../Home/book2.jpg'
import NewArrivals from '../NewArrivals/NewArrivals';
import Testimoinall from '../Testimonial/Testimoinall';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer'

const Home = () => {
  return (<>
    <section className='home'>
      
    <Carousel
     showStatus={false} 
     showArrows={true} 
     showIndicators={false} 
    //  showThumbs={false} 
     interval={1000}
      infiniteLoop={true} 
      autoPlay={false}
      className="carosal"
      >
      <div>
        <a>
          <div className='home-text'>
          <p>Book for your <br />need</p>
          <div className="button-start">
          <button>Get Started</button>
          </div>
          <div className='rating'>
            <div className="rate">
              <div className='rate-img'><img src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><img src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><img src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><img src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
          </div>
          </div>
          {/* <img src={book2} alt="" /> */}
        </a>
      </div>

      <div>
        <a>
        <div className='home-text'>
          <p>Book for your <br />need</p>
          <div className="button-start">
          <button>Get Started</button>
          </div>
          <div className='rating'>
            <div className="rate">
              <div className='rate-img'><img src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><img src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><img src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><img src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
          </div>
          </div>
          <img src={book2} alt="" />
        </a>
      </div>

    </Carousel>
    <NewArrivals />
    <Testimoinall />
    <Contact />
    <Footer />
    </section>
    </>
  )
}

export default Home
