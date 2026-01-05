import { useEffect, useState } from "react";

function UseEffect() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(10);

  useEffect(() => {
    console.log("UseEffect called fiest time");
  }, []);

  useEffect(() => {
    console.log("UseEffect called every time component re-renders");
  });

  useEffect(() => {
    console.log("UseEffect called every time when count2's value has changed");
  }, [count2]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div className="flex gap-6 justify-center items-center flex-col">
      <h1>UseEffect Component</h1>

      <h1>count : {count}</h1>

      <button
        onClick={() => handleClick()}
        className="border p-2 cursor-pointer"
      >
        Click me
      </button>

      <hr className="b-black w-screen" />

      <h1>count2 : {count2}</h1>

      <button
        onClick={() => handleClick2()}
        className="border p-2 cursor-pointer"
      >
        Click me 2
      </button>
    </div>
  );
}

export default UseEffect;
