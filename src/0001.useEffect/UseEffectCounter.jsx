import { useEffect, useState } from "react";

function UseEffectCounter() {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // console.log("Count value has changed to:", count, "---->", count % 10);

    if (count % 10 === 0 && count!==0) {
      // alert("Count is multiple of 10");
      window.alert(`Count value is ${count}`);
    }
  }, [count]);

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
    </div>
  );
}

export default UseEffectCounter;
