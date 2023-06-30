import { useState } from "react";

function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Count: {count}</h1>
      <button
        className="border-2 rounded-md p-2 bg-green-500 border-green-500 text-white mt-2"
        onClick={() => {
          setCount((prev) => {
            return prev + 1;
          });
        }}
      >
        Click to increase counter
      </button>
      <button
        className="border-2 rounded-md p-2 bg-red-500 border-red-500 text-white mt-2"
        onClick={() => {
          setCount((prev) => {
            return prev - 1;
          });
        }}
      >
        Click to decrease counter
      </button>
    </div>
  );
}

export default StateDemo;
