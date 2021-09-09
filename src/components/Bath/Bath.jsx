// When using JSX, React must be in scope
import React from 'react';

function Bath(props) {
  return (
    <div className='Bath component' id={'bth'+props.size}>
      {props.size} Bath
    </div>
  );
}


export default Bath;