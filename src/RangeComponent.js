import React, { useState } from 'react';
import style from 'style.css';

export default function Range(props) {
  let [value, setValue] = useState(props.value);
  let changeHandler = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    return props.changeHandler(event.target.value);
  };
  return (
    <div>
      <hr />
      <br />
      Please set Value:
      <input
        type="range"
        name="range-comp"
        min={props.min}
        max={props.max}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}
