import React from 'react';
import './CardPort.css';

const CardPort = (props) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className='card-port'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className='card-port__wrapper'>
        <div className='card-port__image-wrapper'>
          <img
            src={props.url}
            alt='project-image'
            className='card-port__image'
          />
        </div>
        <div
          className={
            hover
              ? 'card-port__blockquote card-port__blockquote--active'
              : 'card-port__blockquote'
          }>
          <h4
            className={
              hover
                ? 'card-port__title card-port__title--active'
                : 'card-port__title'
            }>
            {props.title}
          </h4>
          <p
            className={
              hover
                ? 'card-port__text card-port__text--active'
                : 'card-port__text'
            }>
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPort;
