import React from 'react';
import './_Cart.scss';
import solutions from '../../images/solutions.png';

export const Cart = (props) => {
  const { title } = props;
  return (
    <div className='cart'>
      <div className='img-cart'>
        <img src={solutions} alt={title} />
      </div>

      <h3 className='title-cart'>{title}</h3>
      <p className='text-cart'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maiores
        dignissimos nobis natus labore sequi dolore explicabo est atque ea
        reiciendis, soluta quis! In perferendis aperiam a assumenda voluptatum.
        Deserunt.
      </p>
    </div>
  );
};
