'use client'

import { useState } from 'react';

type CounterProps = {
  increment: number;
  buttonColor: string;
}

export default function Counter({ increment, buttonColor }: CounterProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + increment;
    
    // Reset to 0 if count exceeds 10
    if (newCount > 10) {
      setCount(0);
    } else {
      setCount(newCount);
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      margin: '10px',
      textAlign: 'center'
    }}>
      <h2>Count: {count}</h2>
      <button 
        onClick={handleClick}
        style={{
          backgroundColor: buttonColor,
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Increment by {increment}
      </button>
    </div>
  );
}