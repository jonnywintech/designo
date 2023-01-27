import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo-dark.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='wrap'>
        <div className='header__container'>
          <div className='header__logo'>
            <Link to='/'>
              <img src={logo} className='header__logo-image' />
            </Link>
          </div>
          <div className='header__nav'>
            <ul className='header__list'>
              <li className='header__item'>
                <Link to='/our-company' className='header__link'>Our Company</Link>
              </li>
              <li className='header__item'>
                <Link to='/locations' className='header__link'>Locations</Link>
              </li>
              <li className='header__item'>
                <Link to='/contact-us' className='header__link'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
