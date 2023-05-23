import React from 'react';
import {
  GreenBtnWithoutBackground,
  ImageBox,
  DescriptionSubtitle,
} from '../index.js';

import './_Cart.scss';

export const Cart = ({ title, abstract, url }) => {
  return (
    <div className='cart'>
      <ImageBox url={url} alt={title} />
      <DescriptionSubtitle text={title} />
      <p className='abstract'>{abstract}</p>
      <GreenBtnWithoutBackground text='read more' />
    </div>
  );
};
