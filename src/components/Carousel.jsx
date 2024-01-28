import React, { useEffect, useState } from 'react';
import carousel from './../carousel.json';

function Carousel() {
  const [carouselData, setCarousel] = useState([]);

  const fetchCarousel = () => {
    setCarousel(carousel);
  };

  useEffect(() => {
    fetchCarousel();
  }, []);

  return (
    <div className="carousel">
      <ul className="slides">
        {carouselData.map((c) => (
          <React.Fragment key={c.id}>
            <input
              type="radio"
              name="radio-buttons"
              id={`img-${c.id}`}
              defaultChecked={c.id === carouselData[0].id}
            />
            <li className="slide-container">
              <div className="slide-image">
                <img src={encodeURI(c.image)} alt={`Carousel Image ${c.id}`} />
              </div>
              <div className="carousel-controls">
                <label
                  htmlFor={`img-${c.id === carouselData[0].id ? carouselData[carouselData.length - 1].id : c.id}`}
                  className="prev-slide"
                >
                  <span>&lsaquo;</span>
                </label>
                <label
                  htmlFor={`img-${c.id === carouselData[carouselData.length - 1].id ? carouselData[0].id : c.id + 1}`}
                  className="next-slide"
                >
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <label
              htmlFor={`img-${c.id}`}
              className="carousel-dot"
              id={`img-dot-${c.id}`}
            ></label>
          </React.Fragment>
        ))}
      </ul>

      <div className="carousel-dots">
        {carouselData.map((c) => (
          <label
            key={`dot-${c.id}`}
            htmlFor={`img-${c.id}`}
            className="carousel-dot"
            id={`img-dot-${c.id}`}
          ></label>
        ))}
      </div>
    </div>
  );
}

export default Carousel;