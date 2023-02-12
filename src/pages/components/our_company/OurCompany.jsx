import React from 'react';
import Cities from '../mutural/Cities';
import Cta from '../mutural/components/Cta';
import AboutUs from './components/AboutUs';
import Deal from './components/Deal';
import Talent from './components/Talent';

const OurCompany = () => {
  return (
    <div>
      <AboutUs />
      <Talent />
      <Cities />
      <Deal />
      <Cta />
    </div>
  );
};

export default OurCompany;
