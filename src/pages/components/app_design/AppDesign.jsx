import React from 'react';
import BannerPortfolio from '../mutural/components/BannerPortfolio';
import CardPort from '../mutural/components/CardPort';
import './AppDesign.css';
import CardPortData from '../mutural/components/CardPortData';

const AppDesign = () => {
  const cards = CardPortData[1].map((data) => {
    return (
      <CardPort
        key={data.id}
        url={data.url}
        title={data.title}
        text={data.text}
      />
    );
  });
  return (
    <div className='app-design'>
      <div className='wrap'>
        <BannerPortfolio />
        <div className='app-design__container'>{cards}</div>
      </div>
    </div>
  );
};

export default AppDesign;
