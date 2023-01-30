import React from 'react';
import './style.css';
import CounterProvider from './CounterProvider';
import Counter from './Counter';

export default function App() {

  return (
    <div>
      <p>Counter Component Renders Below:</p>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}
