import React from 'react';
import Hero from './sections/Hero';
import Offers from './sections/Offers';
import Info from './sections/Info';
import Cta from '../mutural/components/Cta';

const Home = () => {
  return (
    <>
    <Hero />
    <Offers />
    <Info />
    <Cta />
    </>
  )
}

export default Home