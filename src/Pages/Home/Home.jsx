import React from 'react';
import { Address, Carousel, Subscribe, Cart } from '../../Components/index.js';
import img from '../../images/EV_Series.png';

import './_Home.scss';

export const Home = () => {
  return (
    <div className='home-page'>
      <div className='home-page__splash'>
        <Carousel />
      </div>
      <div className='home-page__about'>
        <div className='about-wrapper container'>
          <Cart title={'Products'} />
          <Cart title={'Solutions'} />
          <Cart title={'Integration'} />
        </div>
      </div>
      <div className='home-page__our-work'>
        <div className='our-work-wrap container'>
          <div className='img-wrap'>
            <img src={img} alt='img' />
          </div>
          <div className='text-wrap'>
            <h3>Our Work</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              expedita quam maiores ea alias illum nobis aut deserunt ab amet.
              Debitis eius voluptate minima recusandae dolore exercitationem
              cupiditate consequuntur veniam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fugiat soluta ad quam nisi dolore,
              architecto optio, deleniti quidem culpa obcaecati sint? Ratione
              perferendis atque est aspernatur? Quisquam, temporibus! Pariatur,
              culpa! Totam dolorum dicta porro eveniet odio quam laudantium ab
              ipsa! Exercitationem officiis id repellendus, vel excepturi magni
              nostrum. Odit error dicta magnam nisi commodi possimus. Inventore
              libero excepturi optio quidem. Voluptatibus est totam mollitia
              repellendus non labore facere culpa quod assumenda deleniti
              repudiandae ab ut cumque, voluptates facilis rem tempora fuga,
              illo alias? Distinctio recusandae nam, ipsam vero enim fugiat!
            </p>
            <button className='btn-green'>Check our work</button>
          </div>
        </div>
      </div>
      <div className='home-page__contact'>
        <h3>contact</h3>
      </div>
      <div className='home-page__newsletter'>
        <div className='newsletter-section container'>
          <Subscribe />
          <Address />
        </div>
      </div>
    </div>
  );
};
