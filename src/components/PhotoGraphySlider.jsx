import React from "react";
import { Carousel } from "react-bootstrap";

const PhotoGraphySlider = () => {
  return (
    <div className="PhotoGraphySlider_container">
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 slider_image"
            src="https://cdn.pixabay.com/photo/2014/11/03/10/44/camera-514992_960_720.jpg"
            alt="first"
          />
          <Carousel.Caption>
            <h3>Landscape Photography</h3>
            <button>VIEW THE COLLECTION</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 slider_image"
            src="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg"
            alt="Test Img"
          />

          <Carousel.Caption>
            <h3>Food photography</h3>
            <button>VIEW THE COLLECTION</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 slider_image"
            src="https://cdn.pixabay.com/photo/2017/03/30/18/17/girl-2189247_960_720.jpg"
            alt="Test Img"
          />
          <Carousel.Caption>
            <h3>fashion photography</h3>
            <button>VIEW THE COLLECTION</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default PhotoGraphySlider;
