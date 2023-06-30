import { useState } from "react";

function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click to increase counter
      </button>
    </div>
  );
}

export default StateDemo;
