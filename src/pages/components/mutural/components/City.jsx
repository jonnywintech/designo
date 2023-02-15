import React from 'react';
import { Link } from 'react-router-dom';
import './City.css';
import bannerBg from '/src/assets/shared/desktop/bg-pattern-small-circle.svg';

const City = (props) => {
  return (
    <div className='city'>
      <div className='city__container'>
        <img
          src={props.image}
          alt='city image'
          className='city__image'
          style={{ background: `url(${bannerBg})` }}
        />
        <span className='city__name'>{props.name}</span>
        <Link to={props.url}>
          <button className='city__button'>See Location</button>
        </Link>
      </div>
    </div>
  );
};

export default City;
