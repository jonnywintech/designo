import React from 'react';
import './Talent.css';

const Talent = () => {
  return (
    <div className='talent'>
      <div className='wrap'>
        <div className='talent__container'>
          <div className='talent__image'></div>
          <div className='talent__content'>
            <h2 className='talent__title'>World-class talent</h2>
            <p className='talent__text'>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
              <br />
              <br />
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
