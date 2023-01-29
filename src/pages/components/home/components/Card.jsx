import React from 'react';
import './Card.css';

export default function Card(props) {
  const goToUrl = (url) => {
    window.location.href = url;
  };
  return (
    <div onClick={()=>goToUrl(props.url)}
    style={{
        backgroundImage: `url(${props.backgroundImage})`,
        maxWidth: props.maxWidth,
        minHeight: props.maxHeight,
    }}
    className='card'>
      <div className='card__container'>
        <h2 className='card__title'>{props.title}</h2>
        <span className='card__text'>{props.text}</span>
      </div>
    </div>
  );
}
