import React from 'react';
import { Link } from 'react-router-dom';

import './_Logo.scss';

export const Logo = ({ logo }) => {
  return (
    <Link to='/home' className='logo'>
      <img src={logo} alt='Logo' />
    </Link>
  );
};
