import React from 'react';
import './Deal.css';
import realDeal from '/src/assets/about/desktop/image-real-deal.webp';

const Deal = () => {
  return (
    <div className='deal'>
      <div className='wrap'>
        <div className='deal__container'>
          <div className='deal__content'>
            <h2 className='deal__title'>The real deal</h2>
            <p className='deal__text'>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
              <br />
              <br />
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
          <div className='deal__image' style={{background: `url(${realDeal}` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
