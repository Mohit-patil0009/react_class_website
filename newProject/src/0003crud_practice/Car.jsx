import { ClosedCaptionIcon, Trash2 } from "lucide-react";
import React, { useState } from "react";

export const Car = () => {
  const [Cartodo, setCarTodo] = useState("");
  const [CarTodoArray,setCarTodoArray] = useState([]);
  console.log(CarTodoArray)

  const CarvalueHandler = (e) => {
    setCarTodo(e.target.value);
  };

  const CarHandler =() => {
    setCarTodoArray([...CarTodoArray,Cartodo]);
    setCarTodo("");
  }

  const deleteHandler = (index) => {
    console.log("deleted button clicked",index)
    window.alert("Can you delete this task")
    
    const filterdata = CarTodoArray.filter((e,i)=>{
      return i !==index
    })
    console.log("deleted data", filterdata)

    setCarTodoArray(filterdata)
  }

  return (
    <div className="bg-gray-200 min-h-screen flex-col gap-2 flex justify-center items-center ">
      <div className="border bg-gray-400 p-3 text-white gap-1 flex flex-col rounded-2xl">
        <h1>Add to do list</h1>
        <input
          value={Cartodo}
          onChange={(e)=>CarvalueHandler(e)}
          type="text"
          placeholder="Enter the Task"
          className="border-amber-950 p-1 mb-2"
        />
        <button
          className=" bg-emerald-500 rounded-2xl p-2 w-full"
          onClick={() => CarHandler()}
        >
          Add Task
        </button>
      </div>


    <div>
      {CarTodoArray.map((e,i)=>{
        return (
          <div 
          key={i}
              className="min-w-full cursor-pointer  border-b flex justify-between items-center  gap-3 ">
            <li className="mb-2">{e}</li>
            <Trash2 color="red" onClick={() => deleteHandler(i)}  />
          </div>
        )
      })}
    </div>

    </div>
  );
};
