import React, { useState, useEffect } from 'react';

export default function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(0);

  useEffect(() => {
    document.title = `${count} times`;
    console.log("ran")
  },[count, countB]);

  

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCountB( countB + 1)}>
        Count B ++
        
      </button>
      <div>{countB}</div>
    </div>
  );
}
