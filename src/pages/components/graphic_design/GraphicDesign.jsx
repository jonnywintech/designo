import React from 'react';
import BannerPortfolio from '../mutural/components/BannerPortfolio';
import './GraphicDesign.css';
import CardPortData from '../mutural/components/CardPortData';
import CardPort from '../mutural/components/CardPort';

const GraphicDesign = () => {
  const cards = CardPortData[2].map((data) => {
    return (
      <CardPort
        key={data.id}
        url={data.url}
        title={data.title}
        text={data.text}
      />
    );
  });
  return <div className="graphic-design">
    <div className="wrap">
      <BannerPortfolio />
      <div className="graphic-design__container">
        {cards}
      </div>
    </div>
  </div>
};

export default GraphicDesign;
