import React from 'react';
import './Hero.css';

const Hero = () => {
  const image = {
    heroPhone: '/src/assets/home/desktop/image-hero-phone.webp',
    heroCircle: '/src/assets/home/desktop/bg-pattern-hero-home.svg',
  };
  return (
    <div className='hero'>
      <div className='wrap'>
        <div className='hero__container'>
          <div className='hero__content'>
            <h1 className='hero__title'>
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className='hero__text'>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <button className='hero__button'>Learn more</button>
          </div>
          <div className='hero__image-container'>
            <div className='hero__image-wrapper'>
              <img rel="preload" className='hero__image' src={image.heroPhone} alt='phone' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
