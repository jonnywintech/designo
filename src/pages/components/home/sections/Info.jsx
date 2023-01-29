import React from 'react';
import InfoCard from '../../mutural/components/InfoCard';
import InfoCardData from '../../mutural/components/InfoCardData';
import './Info.css'

const Info = () => {
    const infCard = InfoCardData.map( data =>{
        return  <InfoCard 
                key={data.id}
                title={data.title}
                text={data.text}
                url={data.url}
                />
    } )
  return (
    <div className="info">
        <div className="wrap">
        <div className="info__container">
           {infCard}
        </div>
        </div>
    </div>
  )
}

export default Info