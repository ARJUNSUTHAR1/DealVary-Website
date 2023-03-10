import React from 'react'
import { Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../Home/slider-badging.jpg'
import img2 from '../Home/slider-scale.jpg'
const Home = () => {
  return (
    <section className='home'>
      
    <Carousel
     showStatus={false} 
     showArrows={true} 
    //  showIndicators={false} 
    //  showThumbs={false} 
     interval={2000}
      infiniteLoop={true} 
      autoPlay={true}
      className="carosal"
      >
      <div>
        <a>
          <img src='' alt="" />
        </a>
      </div>

      <div>
        <a>
          <img src='' alt="" />
        </a>
      </div>

    </Carousel>
    </section>
  )
}

export default Home
