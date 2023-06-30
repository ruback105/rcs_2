import { useState, useEffect } from "react";

function EffectDemo() {
  const [count, setCount] = useState(0);
  const [countDouble, setCountDouble] = useState(count * count);

  useEffect(() => {
    setCountDouble(count * count);
  }, [count]);

  useEffect(() => {
    console.log(`No dependency array: ${count}`);
  });

  useEffect(() => {
    console.log(`Empty dependency array: ${count}`);
  }, []);

  useEffect(() => {
    console.log(`dependency array with count: ${count}`);
  }, [count]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Count: {count}</h1>
      <h1>Count double: {countDouble}</h1>
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

export default EffectDemo;
