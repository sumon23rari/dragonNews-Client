import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/3.png';
const BrandCarocel = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          
        </Carousel.Item>
      
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
  
        </Carousel.Item>
      </Carousel>
    );
};

export default BrandCarocel;