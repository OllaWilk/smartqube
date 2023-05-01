import React, { useState, useEffect } from 'react';
import next from '../../images/slick-next.png';
import prev from '../../images/slick-prev.png';
import ev_series from '../../images/EV_Series.png';
import './_Carousel.scss';

const sliders = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % sliders.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % sliders.length);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliders.length - 1 : currentSlide - 1);
  };

  return (
    <div className='carousel container'>
      <div className='carousel__slides'>
        {sliders.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
          >
            <div className='slide__content'>
              <h1 className='header'>
                Highest Operating Ambient <br />
                Temperature AC Unit in the Industry
              </h1>
              <h2 className='subtitle'>EV SERIES</h2>
              <p className='text'>
                Available in three key industry categories:
              </p>
              <ul className='list'>
                <li>NEMA Type 12, 3R, 4, and 4X</li>
                <li>Zone 2-CIZ2 ATEX/IECEx/AEx/EX IP66</li>
                <li>CID2</li>
              </ul>
            </div>
            <div className='slide__img'>
              <img src={ev_series} alt='' />
            </div>
          </div>
        ))}
      </div>
      <div className='carousel__navigation'>
        <button className='prev' onClick={prevSlide}>
          <img src={prev} alt='prev' />
        </button>
        <button className='next' onClick={nextSlide}>
          <img src={next} alt='next' />
        </button>
      </div>
      <div className='carousel__dots'>
        {sliders.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
