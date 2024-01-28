import React, { useEffect, useState } from 'react';
import carouselData from './../carousel.json';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === carouselData.length ? 1 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? carouselData.length : prevSlide - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change the time (in milliseconds) between slides

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="carousel">
      <div className="slide-container">
        <ul className="slides" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
          {carouselData.map((item, index) => (
            <li key={item.id} className="slide-image">
              <img src={item.image} alt={`Slide ${item.id}`} />
            </li>
          ))}
        </ul>
        <div className="carousel-controls">
          <label className="prev-slide" onClick={prevSlide}>&#10094;</label>
          <label className="next-slide" onClick={nextSlide}>&#10095;</label>
        </div>
        <div className="carousel-dots">
          {carouselData.map((item, index) => (
            <label
              key={`img-dot-${item.id}`}
              className={`carousel-dot ${index + 1 === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index + 1)}
            ></label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
