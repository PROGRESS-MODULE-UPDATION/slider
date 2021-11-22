import React from 'react';
import {Carousel} from 'react-bootstrap';
import './CarouselContainer.css';

import image1 from './../assets/images/1.jpg';

const CarouselContainer = () => {
    return(
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mathematics</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>You are Doing Great </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Physics</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>Keep it up and continue to do the same </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="English"
        />
        <Carousel.Caption>
          <h3>English</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>Your skills seems to be great</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="3rd slide"
        />
        <Carousel.Caption>
          <h3>Chemistry</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>Your bonding with chemistry is superb</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={image1}
          alt="4th slide"
        />
        <Carousel.Caption>
          <h3>Biology</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>You are Doing Great </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="5th slide"
        />
        <Carousel.Caption>
          <h3>Histrory</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>Looks like trying to learn more in history </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="6th slide"
        />
        <Carousel.Caption>
          <h3>Geography</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>You are great in learing about our land</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    )
}

export default CarouselContainer;