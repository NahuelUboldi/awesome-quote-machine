import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

function Card() {
  return (
    <div className='card text-center my-5' id='quote-box'>
      <CardHeader />
      <CardBody />
    </div>
  );
}

export default Card;
