import React from 'react';
import { ImageBox } from '../ImageBox/ImageBox';
import './_ServicesIconAndAbstract.scss';

export const ServicesIconAndAbstract = ({ icon, title, abstract }) => {
  return (
    <div className='servicesIconAndAbstract'>
      <ImageBox url={icon} alt={title} width='60px' heigth='60px' />
      <div className='abstract-wrap'>
        <h3>{title}</h3>
        <p>{abstract}</p>
      </div>
    </div>
  );
};
