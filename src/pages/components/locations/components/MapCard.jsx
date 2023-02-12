import React from 'react';
import './MapCard.css';

const MapCard = (props) => {
  const even = props.id % 2 === 0;
  const image = screen.width > 1024 ? props.mapLocation[0] : props.mapLocation[1];
  return (
    <div className='map-card'>
      <div
        className={
          even
          ? 'map-card__container map-card__container--reverse'
          : 'map-card__container'
        }>
        <div className='map-card__description'>
          <div className='map-card__wrapper'>
            <h2 className='map-card__title'>{props.title}</h2>
            <ul className='map-card__list'>
              <li className='map-card__item map-card__item--bold'>
                {props.officeLocation}
              </li>
              <li className='map-card__item'>{props.address}</li>
              <li className='map-card__item'>{props.city}</li>
            </ul>
            <ul className='map-card__list'>
              <li className='map-card__item map-card__item--bold'>Contact</li>
              <li className='map-card__item'>
                P:
                <a
                  href={'tel: ' + props.phoneNumber}
                  className='map-card__link'>
                  {props.phoneNumber}
                </a>
              </li>
              <li className='map-card__item'>
                M:
                <a href={'mailto:' + props.email} className='map-card__link'>
                  {props.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='map-card__image-wrapper'>
          <a href='javascript:void(0)' className='map-card__image-link'>
            <img
              src={image}
              alt='location'
              className='map-card__image'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
