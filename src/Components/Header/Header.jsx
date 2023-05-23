import React from 'react';
import img from '../../images/engeneer.png';
import {
  HeadlineSplash,
  ImageBox,
  MainColorBtn,
  SubtitleSplash,
  TransparentBtn,
} from '../../Components/index.js';

import './_Header.scss';

export const Header = () => {
  return (
    <div className='header container'>
      <div className='header__content-wrapper'>
        <SubtitleSplash />
        <HeadlineSplash text='We will design the future' />
        <p className='text'>
          SmartQube sp z.o.o is a team of engineers who passionately design the
          future using the latest technological solutions.
        </p>
        <div className='header__btns-wrap'>
          <MainColorBtn text='our portfolio' />
          <TransparentBtn text='About us' />
        </div>
      </div>
      <ImageBox width='auto' height='620px' url={img} alt='engeneer' />
    </div>
  );
};
