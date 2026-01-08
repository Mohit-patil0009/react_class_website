import { useEffect, useState } from "react";

function TaskCounterArray() {
  let [array, setArray] = useState([]);
  console.log("🚀 ~ TaskCounterArray ~ array:", array);

  const addElement = () => {
    // let copyArry = [...array];
    // copyArry.push(array.length + 1);
    // setArray(copyArry);

    // setArray([])
    // setArray([...array])
    // setArray([...array, new value])

    setArray([...array, array.length + 1]);
  };

  // const removeElement = () => {
  //   let copyArry = [...array];
  //   copyArry.pop(array.length - 1);
  //   setArray(copyArry);
  // }

  return (
    <div className="flex gap-6 justify-center items-center flex-col">
      <h1>UseEffect Component</h1>

      <button
        onClick={() => addElement()}
        className="border p-2 cursor-pointer"
      >
        Add number
      </button>

 
      {/* <button
        onClick={() => removeElement()}
        className="border p-2 cursor-pointer"
      >
        subtract number
      </button> */}

      <div>
        {array.map((e) => {
          return <li>{e}</li>;
        })}
      </div>
    </div>
  );
}

export default TaskCounterArray;
