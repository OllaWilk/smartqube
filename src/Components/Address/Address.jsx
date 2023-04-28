import React from 'react';
import { Logo } from '../../Components/index';
import logoimg from '../../images/logo.png';

import './_Address.scss';

export const Address = () => {
  return (
    <div className='address'>
      <Logo logo={logoimg} />
      <div className='address__location'>
        <p className='address__text'>ul. Rakietowa 29A </p>
        <p className='address__text'>54-615 wrocław</p>
      </div>
      <div className='address__mail'>
        <p className='address__text'>sales: grzegorz.gorny@smartqube.pl</p>
      </div>
    </div>
  );
};
