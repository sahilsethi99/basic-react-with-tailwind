// src/components/Counter.jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
    function decrement(c){
        setCount(c-1);
        // alert(e.target);
        // alert('Hi');
    }
  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-white shadow-md rounded text-center">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <div className="flex items-center justify-center">
        <button
          onClick={()=>decrement(count)}
          className="bg-red-500 text-white px-4 py-2 rounded-l hover:bg-red-600"
        >
          -
        </button>
        <span className="px-4 py-2 border-t border-b">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
