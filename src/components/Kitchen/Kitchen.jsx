// When using JSX, React must be in scope
import React from 'react';
import Sink from '../Sink/Sink';
import Oven from '../Oven/Oven';

function Kitchen(props) {
  return (
    <div className='Kitchen component'>
      Kitchen
      <Oven />
      <Sink />
    </div>
  )
};


export default Kitchen;