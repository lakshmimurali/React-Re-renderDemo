import React from 'react';
import style from './style.css';

export default function BoldDisplay(props) {

  return (
    <div>
      {' '}
      Current Value is :<b> {props.count} </b>
    </div>
  );
}
