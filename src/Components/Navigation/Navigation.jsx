import React from 'react';
import { Link } from 'react-router-dom';
import { useToggle } from '../../utils/hooks/useToggle';

import { Logo } from '../index';
import logoimg from '../../images/logo150.png';
import hamburger from '../../images/hamburger.png';
import close from '../../images/close.png';

import './_Navigation.scss';

export const Navigation = () => {
  const navLinks = ['home', 'about', 'products', 'portfolio', 'contact'];

  const [value, toggle] = useToggle(false);

  const animateSidebar = () => {
    const sidebar = document.querySelector('.sidebar');

    toggle(!value);

    sidebar.classList.toggle('active');
  };

  return (
    <div className='navigation'>
      <Logo logo={logoimg} />

      <ul className='navigation__list'>
        {navLinks.map((item) => (
          <Link to={`/${item}`} key={`link-${item}`} className='link'>
            {item}
          </Link>
        ))}
      </ul>

      <div className='navigation__sidebar'>
        <div className='navigation__sidebar-icon' onClick={animateSidebar}>
          <img
            src={value ? close : hamburger}
            alt={value ? 'hamburger' : 'close'}
          />
        </div>

        <nav className='sidebar'>
          <ul>
            {navLinks.map((item) => (
              <Link
                to={`/${item}`}
                key={`link-${item}`}
                className='sidebar-link'
                onClick={animateSidebar}
              >
                {item}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
