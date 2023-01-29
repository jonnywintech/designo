import React from 'react';
import './infoCard.css';

const InfoCards = (props) => {
  return (
    <div className="info-card">
        <div className="info-card__container">
            <img className='info-card__image' src={props.url} alt="worker" />
            <h3 className="info-card__title">{props.title}</h3>
            <p className="info-card__text">{props.text}</p>
        </div>
    </div>
  )
}

export default InfoCards