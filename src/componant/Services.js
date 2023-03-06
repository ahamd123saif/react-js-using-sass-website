import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import IMGc from "../assets/4.jpg"
import IMGc2 from "../assets/3.jpg"
import IMGc3 from "../assets/1.png"

const Services = () => {
  return (
    <div>
      <Carousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      interval={2000}
      >
        <div>
            <img src={IMGc} alt="" />
            <p className='legend'>front en developer</p>
        </div>
        <div>
            <img src={IMGc2} alt="" />
            <p className='legend'>front en developer</p>
        </div>
        <div>
            <img src={IMGc3} alt="" />
            <p className='legend'>front en developer</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services;
