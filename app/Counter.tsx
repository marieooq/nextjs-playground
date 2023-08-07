"use client";
import React, { useState } from "react";
import { useCounter } from "@/context/CounterProvider";

type CounterProps = {
  children?: React.ReactNode;
};

const Counter = ({ children }: CounterProps) => {
  const [count, setCount] = useCounter();
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
      {/* {children} */}
    </div>
  );
};

export default Counter;
