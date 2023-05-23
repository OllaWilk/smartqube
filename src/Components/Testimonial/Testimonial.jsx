import React from 'react';
import logo from './../../images/logo.png';
import './_Testimonial.scss';

export const Testimonial = ({ text, name, company, logo }) => {
  return (
    <div className='testimonial'>
      <div className='description'>
        {text}
        <div className='name-wrap'>
          <div className='color'>{/* <img src={logo} alt='logo' /> */}</div>
          <p className='name'>{name}</p>
          <p className='company'>{company}</p>
        </div>
      </div>
    </div>
  );
};
