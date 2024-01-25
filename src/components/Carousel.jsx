import React, { useEffect, useState } from 'react';
import carousel from './../carousel.json';

function Carousel() {
  const [carousel_data, setCarousel] = useState([]);

  const fetchCarousel = () => {
    setCarousel(carousel);
  };

  useEffect(() => {
    fetchCarousel();
  }, []);

  return (
    <div className="carousel">
      <ul className="slides">
        {carousel_data.map((c, index) => (
          <input
            key={c.id}
            type="radio"
            name="radio-buttons"
            id={`img-${index + 1}`}
            defaultChecked={index === 0}
          />
        ))}
        {carousel_data.map((c, index) => (
          <li key={c.id} className="slide-container">
            <div className="slide-image">
              <img src={c.image} alt={`Carousel Image ${c.id}`} />
            </div>
            <div className="carousel-controls">
              <label
                htmlFor={`img-${index === 0 ? carousel_data.length : index}`}
                className="prev-slide"
              >
                <span>&lsaquo;</span>
              </label>
              <label
                htmlFor={`img-${index === carousel_data.length - 1 ? 1 : index + 2}`}
                className="next-slide"
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
        ))}
      </ul>

      <div className="carousel-dots">
        {carousel_data.map((c, index) => (
          <label
            key={c.id}
            htmlFor={`img-${index + 1}`}
            className="carousel-dot"
            id={`img-dot-${index + 1}`}
          ></label>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
