import React from 'react';
import { GreenBtnWithoutBackground } from '../Buttons/GreenBtnWithoutBackground/GreenBtnWithoutBackground';
import './_PortfolioCart.scss';

export const PortfolioCart = ({ img }) => {
  return (
    <div className='porftolio-cart'>
      <div className='img-wrap'>
        <img src={img} alt='alt' />
        <div className='abstract'>
          <h3>Lorem ipsum</h3>

          <GreenBtnWithoutBackground text='read more' />
        </div>
      </div>
    </div>
  );
};
