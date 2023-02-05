import React, { useState } from 'react';
import Card from '../components/Card';
import cardData from './CardData';
import './Offers.css';

const Offers = () => {
    const [forkData,setForkData] = useState(cardData);

   const cardElement = forkData.map(data =>{
   return <Card 
    key={data.id}
    title={data.title}
    text={data.text}
    backgroundImage={data.background}
    maxWidth={data.width}
    maxHeight={data.height}
    url={data.url} />
   })
    return (
   <div className="offers">
    <div className="wrap">
        <div className="offers__container">
          {cardElement}
        </div>
    </div>
   </div>
  )
}

export default Offers