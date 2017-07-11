import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './TravelCarousel.css';
//import { pic1 } from '/Users/n0136975/Desktop/react-travel-site/src/assets/global_travel.png';

class TravelCarousel extends Component {
  render() {
    return (
        <Carousel>
              {/*<h1>Welcome to my travel site</h1>*/}
            <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={require('../../assets/global_travel.png')} />
            <Carousel.Caption>
                <h1>Welcome to my travel site</h1>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={require('../../assets/international_flags.jpg')}/>
            <Carousel.Caption>
                <h1>Welcome to my travel site</h1>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={require('../../assets/travel-world.jpg')}/>
            <Carousel.Caption>
                <h1>Welcome to my travel site</h1>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  }
}

export default TravelCarousel;