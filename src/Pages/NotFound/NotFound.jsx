import React from 'react';
import { Logo } from '../../Components/index';
import logoimg from '../../images/logo.png';

import './_NotFound.scss';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='notfound-page'>
      <Logo logo={logoimg} />
      <div className='error-wrap'>
        <h2 className='res-info'>Opps! 404</h2>
        <p>
          The page you're looking for appears to have been moved, deleted, or
          doesn't exist. We apologize for the inconveniences.
        </p>
      </div>
      <Link to='/home'>Return to home page</Link>
    </div>
  );
};
