import React from 'react';
import './BannerPortfolio.css';
import BannerData from '../../web_design/BannerData';

const BannerPortfolio = () => {
  const urlEnd = window.location.href.split('/').at(-1);
  console.log(urlEnd);
  const banner = BannerData.filter((data) => {
    return data.title.replace(/\s+/g, '-').toLowerCase() === urlEnd;
  }).map((data) => {
    return (
      <div className='banner'>
        <div className='banner__container'>
          <h1 className='banner__title'>{data.title}</h1>
          <p className='banner__text'>{data.text}</p>
        </div>
      </div>
    );
  });
  return <>
  {banner}
  </>;
};

export default BannerPortfolio;
