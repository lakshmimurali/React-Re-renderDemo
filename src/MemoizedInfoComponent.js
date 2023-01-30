import React from 'react';
import style from './style.css';

let InfoComponent = React.memo(() => {
  console.log('Inside Info Component');
  return (
    <p>
      1.Counter is a parent Component. It holds the state count. 2.Counter
      component has two child components. 3.Child component 1 is for displaying
      count in bold format. 4.Child component 2 is for displaying this info.
    </p>
  );
});

export default InfoComponent;
