import React, { useState, useContext } from 'react';
import BoldDisplay from './BoldDisplay';
import InfoComponent from './MemoizedInfoComponent';
import CounterContext from './CounterContext';
import style from './style.css';

export default function Counter(props) {
  const [count, setCount] = useState(0);

  let contextObj = React.useContext(CounterContext);
  let incBy = contextObj.inc;
  let decBy = contextObj.dec;

  let incrementCount = (event) => {
    console.log(count, event.target.value);
    return setCount(count + incBy);
  };

  let decrementCount = () => {
    console.log(count);
    return setCount(count - decBy);
  };
  let resetCount = () => {
    console.log(count);
    return setCount(0);
  };


  return (
    <div>
      <InfoComponent />
      <BoldDisplay count={count} />
      <p>
        {' '}
        <button value="+" onClick={incrementCount}>
          {' '}
          Add Counter{' '}
        </button>{' '}
      </p>
      <p>
        {' '}
        <button value="-" onClick={decrementCount}>
          {' '}
          Decrement Counter{' '}
        </button>{' '}
      </p>
      <p>
        {' '}
        <button value="0" onClick={resetCount}>
          {' '}
          Reset Counter{' '}
        </button>{' '}
      </p>
    </div>
  );
}
