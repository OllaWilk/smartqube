import React from 'react';
import { GreenBtn } from '../Buttons/GreenBtn/GreenBtn';

import './_ImgOnTheLeftAndTextOnRight.scss';

export const ImgOnTheLeftAndTextOnRight = ({ img }) => {
  return (
    <div className='img-text-wrap '>
      <div className='img-wrap'>
        <img src={img} alt='img' />
      </div>
      <div className='text-wrap'>
        <h3>Our Work</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita
          quam maiores ea alias illum nobis aut deserunt ab amet. Debitis eius
          voluptate minima recusandae dolore exercitationem cupiditate
          consequuntur veniam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat soluta ad quam nisi dolore, architecto optio,
          deleniti quidem culpa obcaecati sint? Ratione perferendis atque est
          aspernatur? Quisquam, temporibus! Pariatur, culpa! Totam dolorum dicta
          porro eveniet odio quam laudantium ab ipsa! Exercitationem officiis id
          repellendus, vel excepturi magni nostrum. Odit error dicta magnam nisi
          commodi possimus. Inventore libero excepturi optio quidem.
          Voluptatibus est totam mollitia repellendus non labore facere culpa
          quod assumenda deleniti repudiandae ab ut cumque, voluptates facilis
          rem tempora fuga, illo alias? Distinctio recusandae nam, ipsam vero
          enim fugiat!
        </p>
        <GreenBtn text='Read more' />
      </div>
    </div>
  );
};
