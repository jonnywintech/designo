import React from 'react'
import './BannerPortfolio.css';

const BannerPortfolio = (props) => {
  return (
    <div className="banner">
        <div className="banner__container">
            <h1 className="banner__title">{props.title}</h1>
            <p className="banner__text">{props.text}</p>
        </div>
    </div>
  )
}

export default BannerPortfolio