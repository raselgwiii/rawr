import React, { useState, useEffect } from 'react';
import imagesData from './../carousel.json';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleChangeSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      const nextSlide = (currentSlide % imagesData.length) + 1;
      handleChangeSlide(nextSlide);
    }, 3000);

    return () => clearInterval(autoSlideInterval);
  }, [currentSlide]);

  return (
        <div className="carousel">
          <ul className="slides">
            {imagesData.map((image, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name="radio-buttons"
                  id={`img-${image.id}`}
                  checked={currentSlide === image.id}
                  onChange={() => handleChangeSlide(image.id)}
                />
                <li className={`slide-container ${currentSlide === image.id ? 'active' : ''}`}>
                  <div className="slide-image">
                    <img src={image.image} alt={`Slide ${image.id}`} />
                  </div>
                  <div className="carousel-controls">
                    <label
                      htmlFor={`img-${(image.id - 2 + imagesData.length) % imagesData.length + 1}`}
                      className="prev-slide"
                      onClick={() =>
                        handleChangeSlide(
                          (image.id - 2 + imagesData.length) % imagesData.length + 1
                        )
                      }
                    >
                      <span>&lsaquo;</span>
                    </label>
                    <label
                      htmlFor={`img-${image.id % imagesData.length + 1}`}
                      className="next-slide"
                      onClick={() => handleChangeSlide(image.id % imagesData.length + 1)}
                    >
                      <span>&rsaquo;</span>
                    </label>
                  </div>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
     
  );
};

export default Carousel;