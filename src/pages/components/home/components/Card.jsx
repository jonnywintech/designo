import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        maxWidth: props.maxWidth,
        minHeight: props.maxHeight,
      }}
      className='card'>
      <Link to={props.url} className='card__link'></Link>
      <div className='card__container'>
        <h2 className='card__title'>{props.title}</h2>
        <span className='card__text'>{props.text}</span>
      </div>
    </div>
  );
}
