import React, { useState } from 'react';
import style from './style.css';

import CounterContext from './CounterContext';
import Range from './RangeComponent';

export default function CounterProvider(props) {
  const [incrementBy, setIncrementBy] = useState(1);
  const [decrementBy, setDecrementBy] = useState(1);

  return (
    <CounterContext.Provider value={{ inc: incrementBy, dec: decrementBy }}>
      Adjust Increment using the range
      <Range
        min={1}
        max={10}
        value={2}
        changeHandler={(val) => setIncrementBy(+val)}
      ></Range>
      Adjust Decrement using the range
      <Range
        min={1}
        max={10}
        value={2}
        changeHandler={(val) => setDecrementBy(+val)}
      ></Range>
      {props.children}
    </CounterContext.Provider>
  );
}
