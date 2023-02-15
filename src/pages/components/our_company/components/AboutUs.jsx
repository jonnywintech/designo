import React from 'react';
import './AboutUs.css';
import aboutHero from '/src/assets/about/desktop/image-about-hero.webp';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='wrap'>
        <div className='about-us__container'>
          <div className='about-us__left-side'>
            <h2 className='about-us__title'>About us</h2>
            <p className='about-us__text'>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </p>
          </div>
          <div
            className='about-us__right-side'
            style={{ background: `url(${aboutHero})` }}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
