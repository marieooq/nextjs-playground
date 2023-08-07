import React, { useState } from "react";

const Counter = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div>Count: {count}</div>
      <button
        onClick={increment}
        className="px-2 py-1 rounded-lg bg-blue-600 text-white"
      >
        Increment
      </button>
      {children}
    </div>
  );
};

export default Counter;
