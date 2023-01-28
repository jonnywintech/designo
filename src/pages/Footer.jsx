import React from 'react';
import logo from '../assets/shared/desktop/logo-light.png';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const icon = {
    facebook: '/src/assets/shared/desktop/icon-facebook.svg',
    youtube: '/src/assets/shared/desktop/icon-youtube.svg',
    twitter: '/src/assets/shared/desktop/icon-twitter.svg',
    pinterest: '/src/assets/shared/desktop/icon-pinterest.svg',
    instagram: '/src/assets/shared/desktop/icon-instagram.svg',
  };

  return (
    <div className='footer'>
      <div className='wrap'>
        <div className='footer__container'>
          <div className='footer__top'>
            <div className='footer__logo'>
              <Link to='/'>
                <img src={logo} className='footer__logo-image' />
              </Link>
            </div>
            <div className='footer__nav'>
              <ul className='footer__top-list'>
                <li className='footer__top-item'>
                  <Link to='/our-company' className='footer__top-link'>
                    Our Company
                  </Link>
                </li>
                <li className='footer__top-item'>
                  <Link to='/locations' className='footer__top-link'>
                    Locations
                  </Link>
                </li>
                <li className='footer__top-item'>
                  <Link to='/contact-us' className='footer__top-link'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className='footer__splitter' />
          <div className='footer__bottom'>
            <div className='footer__location'>
              <ul className='footer__bottom-list'>
                <li className='footer__bottom-item'>Designo Central Office</li>
                <li className='footer__bottom-item'>3886 Wellington Street</li>
                <li className='footer__bottom-item'>
                  Toronto, Ontario M9C 3j5
                </li>
              </ul>
            </div>
            <div className='footer__contact'>
              <ul className='footer__bottom-list'>
                <li className='footer__bottom-item'>
                  Contact Us (Central Office)
                </li>
                <li className='footer__bottom-item'>P:+1 253-863-896</li>
                <li className='footer__bottom-item'>M: contact@designo.com</li>
              </ul>
            </div>
            <div className='footer__social'>
              <Link to='/'>
                <img src={icon.facebook} className='footer__icon' />
              </Link>
              <Link to='/'>
                <img src={icon.youtube} className='footer__icon' />
              </Link>
              <Link to='/'>
                <img src={icon.twitter} className='footer__icon' />
              </Link>
              <Link to='/'>
                <img src={icon.pinterest} className='footer__icon' />
              </Link>
              <Link to='/'>
                <img src={icon.instagram} className='footer__icon' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
