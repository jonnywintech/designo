import React from 'react';
import { Link } from  'react-router-dom';
import './Cta.css';

const Cta = () => {
  return (
    <div className='cta'>
      <div className='wrap'>
        <div className='cta__container'>
          <div className='cta__content'>
            <h3 className='cta__title'>Let's talk about our project</h3>
            <p className='cta__text'>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <Link to='/contact'>
              <button className='cta__button'>Get in touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
