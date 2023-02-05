import React from 'react';
import CityData from './CityData';
import City from './components/City';
import './Cities.css';

const Cities = () => {
  const cities = CityData.map((city) => {
    return (
      <City key={city.id} name={city.name} image={city.image} url={city.url} />
    );
  });
  return (
    <div className='cities'>
      <div className='wrap'>
        <div className='cities__container'>{cities}</div>
      </div>
    </div>
  );
};

export default Cities;
