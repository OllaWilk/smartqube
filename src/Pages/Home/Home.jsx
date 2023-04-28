import React from 'react';
import { Address, Carousel, Subscribe } from '../../Components/index.js';

import './_Home.scss';

export const Home = () => {
  return (
    <div className='home-page'>
      <div className='home-page__splash'>
        <div className='container'>
          <Carousel />
        </div>
      </div>
      <div className='home-page__products-and-services'></div>
      <div className='home-page__solutions'></div>
      <div className='home-page__contact'>
        <div className='contact-section container'>
          <Subscribe />
          <Address />
        </div>
      </div>
    </div>
  );
};
