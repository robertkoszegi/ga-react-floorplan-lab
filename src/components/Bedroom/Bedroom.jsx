// When using JSX, React must be in scope
import React from 'react';

function Bedroom(props) {
  return (
    <div className='Bedroom component' id={'br'+props.bedNum}>
      Bedroom {props.bedNum}
    </div>
  );
}


export default Bedroom;