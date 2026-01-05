import { ClosedCaptionIcon, Trash2 } from "lucide-react";
import React, { use, useState } from "react";

export default function User() {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  console.log("🚀 ~ User ~ todoArray:", todoArray);

  const todoHandler = (e) => {
    // console.log("----->", e.target);
    setTodo(e.target.value);
  };

  const addTodoHandler = () => {
    setTodoArray([...todoArray, todo]);
    setTodo("");
  };

  const deleteHandler = (index) => {
    console.log("Delete Clicked",index);

   const filteredData =  todoArray.filter((e,i)=>{
      return i !==index
    })
   console.log("🚀 ~ deleteHandler ~ filteredData:", filteredData)
   setTodoArray(filteredData)
  };
  return (
    <div className="bg-gray-200 min-h-screen flex-col gap-2 flex justify-start items-center  ">
      <div className="border bg-gray-800 text-white gap-1 flex flex-col">
        <h1>Todo</h1>
        <input
          value={todo}
          onChange={(e) => todoHandler(e)}
          type="text"
          className="border p-3"
          placeholder="Enter todo"
        />
        <br />
        <button
          onClick={() => addTodoHandler()}
          className="bg-amber-300 w-full"
        >
          Add Todo
        </button>
      </div>
      {/* <h1>{todo}</h1> */}

      <div className="flex justify-center  items-start flex-col gap-2">
        {todoArray.map((e, i) => {
          return (
            <div
              key={i}
              className="min-w-full cursor-pointer  border-b flex justify-between items-center  gap-3 "
            >
              <li>{e}</li>
              <Trash2 color="red" onClick={() => deleteHandler(i)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/*
let array = [task1,task2,task3,task4]

index = 1

let filterData = array.filter((e,i)=> {
  return  i !== index 
})
[task1,task3,task4]

setArray(filterData)


*/
