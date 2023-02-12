import React from 'react';
import Cta from '../mutural/components/Cta';
import MapCard from './components/MapCard';
import './Locations.css';
import locationsData from './LocationsData';

const Locations = () => {
  const card = locationsData.map((data) => {
    return (
      <MapCard
        key={data.id}
        id={data.id}
        title={data.title}
        officeLocation={data.officeLocation}
        address={data.address}
        city={data.city}
        phoneNumber={data.phoneNumber}
        email={data.email}
        mapLocation={data.mapLocation}
      />
    );
  });
  return (
    <div className='locations'>
      <div className='wrap'>{card}</div>
      <Cta />
    </div>
  );
};

export default Locations;
