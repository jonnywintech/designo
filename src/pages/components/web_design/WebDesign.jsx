import React from 'react';
import './WebDesign.css';
import BannerPortfolio from '../mutural/components/BannerPortfolio';
import CardPortData from '../mutural/components/CardPortData';
import CardPort from '../mutural/components/CardPort';
import MoreProjects from '../mutural/components/MoreProjects';
import Cta from '../mutural/components/Cta';

const WebDesign = () => {
  const cards = CardPortData[0].map((data) => {
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
    <div className='web-design'>
      <div className='wrap'>
        <BannerPortfolio />
        <div className='web-design__card-wrapper'>{cards}</div>
        <MoreProjects />
        <Cta />
      </div>
    </div>
  );
};

export default WebDesign;
