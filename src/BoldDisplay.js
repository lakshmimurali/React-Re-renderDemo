import React from 'react';
import style from './style.css';

export default function BoldDisplay(props) {
  console.log('Inside Bold Component');

  return (
    <div>
      {' '}
      Current Value is :<b> {props.count} </b>
    </div>
  );
}
