import React from 'react';
import next from '../../images/slick-next.png';
import prev from '../../images/slick-prev.png';
import ev_series from '../../images/EV_Series.png';
import enclosure_modul from '../../images/Enclosure-Modularity-Website.png';
import './_Carousel.scss';

export const Carousel = () => {
  return (
    <div className='carousel'>
      <div className='carousel__slides-and-navigation'>
        <button className='prev'>
          <img src={prev} alt='' />
        </button>
        <div className='slide '>
          <div className='slide-content'>
            <h1 className='slide-header'>
              Highest Operating Ambient <br />
              Temperature AC Unit in the Industry
            </h1>
            <h2 className='slide-subtitle'>EV SERIES</h2>
            <p className='slide-text'>
              Available in three key industry categories:
            </p>
            <ul className='slide-list'>
              <li>
                <p></p>
                NEMA Type 12, 3R, 4, and 4X
              </li>
              <li>
                <p></p>
                Zone 2-CIZ2 ATEX/IECEx/AEx/EX IP66
              </li>
              <li>
                <p></p>
                CID2
              </li>
            </ul>
          </div>
          <div className='slide-img'>
            <img src={ev_series} alt='' />
          </div>
        </div>
        <div className='slide active'>
          <div className='slide-content'>
            <h2 className='slide-subtitle'>
              The NetworkQUBE
              <sup>TM</sup>
            </h2>
            <p className='slide-text'>
              The industry's only NEMA Type 12, 3R, 4, 4X and IP66 Modular
              Telecom and Network Enclosures
            </p>
            <ul className='slide-list'>
              <li>
                This patent pending line of enclosures grows as your network
                grows.
              </li>
              <li>
                No connecting collar allows for a smaller footprint in the
                field.
              </li>
            </ul>
          </div>
          <div className='slide-img'>
            <img src={enclosure_modul} alt='' />
          </div>
        </div>
        <button className='next'>
          <img src={next} alt='slide img' />
        </button>
      </div>
      <div className='carousel__dots'>
        <span className='dot active' />
        <span className='dot' />
        <span className='dot' />
        <span className='dot' />
      </div>
    </div>
  );
};
