import React, { useState, useEffect } from 'react';
import next from '../../images/slick-next.png';
import prev from '../../images/slick-prev.png';
import { images } from '../../images/index.js';
// import ev_series from '../../images/EV_Series.png';
import enclosure_modul from '../../images/Enclosure-Modularity-Website.png';
import './_Carousel.scss';

const { ev_series } = images;

const sliders = [
  {
    id: 1,
    alt: 'ev_series',
    src: ev_series,
    h1: 'Highest Operating Ambient <br /> Temperature AC Unit in the Industry',
    h2: 'EV SERIES',
    p: 'Available in three key industry categories:',
    ul: `<li>
            NEMA Type 12, 3R, 4, and 4X
            </li>
         <li>
            Zone 2-CIZ2 ATEX/IECEx/AEx/EX IP66
        </li>
        <li>
            CID2
        </li>`,
  },
  {
    id: 2,
    alt: 'The NetworkQUBE<sup>TM</sup>',
    src: enclosure_modul,
    h1: '',
    h2: 'The NetworkQUBE <sup>TM</sup>',
    p: " The industry's only NEMA Type 12, 3R, 4, 4X and IP66 Modular Telecom and Network Enclosures",
    ul: `  <li>
      This patent pending line of enclosures grows as your network
      grows.
    </li>
    <li>
      No connecting collar allows for a smaller footprint in the
      field.
    </li>`,
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
    <div className='carousel'>
      <div className='carousel__slides'>
        {sliders.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
          >
            <div className='slide__content'>
              <h1 className='header'>{slide.h1}</h1>
              <h2 className='subtitle'>{slide.h2}</h2>
              <p className='text'>{slide.p}</p>
              <ul className='list'>{slide.ul}</ul>
            </div>
            <div className='slide__img'>
              <img src={slide.src} alt={slide.alt} />
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
