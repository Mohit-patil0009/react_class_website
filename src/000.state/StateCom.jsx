import { useState } from "react";

function StateCom() {
  let [count, setCount] = useState(80);
  console.log("🚀 ~ StateCom ~ count:", count);

  function handleIncrement() {
    console.log("Increment button clicked");
    setCount(count + 1);
  }
  function decrement() {
    console.log("Increment button clicked");
    setCount(count + 1);
  }

  return (
    <div className="flex justify-center items-center flex-col bg-red-500 h-screen mb-5">
      <h1>Count is {count}</h1>

      <button onClick={() => handleIncrement()} className="border p-3">
        Increment{" "}
      </button>
      <button onClick={() => decrement()} className="border p-3">
        Increment{" "}
      </button>
    </div>
  );
}

export default StateCom;
