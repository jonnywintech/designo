import React ,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo-dark.png';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleBurger = () => {
    setShowMenu(prev =>!prev);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  const handleWindowScroll = () => {
    setShowMenu(false);
  };
  
  return (
    <div className='header'>
      <div className='wrap'>
        <div className='header__container'>
          <div className='header__logo'>
            <Link to='/'>
              <img src={logo} className='header__logo-image' alt='logo' />
            </Link>
          </div>
          <div className={showMenu?"header__burger-btn change":"header__burger-btn"} onClick={()=> toggleBurger()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className={showMenu?'header__nav header__nav--open':'header__nav'}>
            <ul className='header__list'>
              <li className='header__item'>
                <Link to='/about-us' className='header__link'>Our Company</Link>
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
