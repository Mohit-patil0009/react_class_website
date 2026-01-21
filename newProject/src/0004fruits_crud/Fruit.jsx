import { ClosedCaptionIcon, OctagonX } from "lucide-react";
import React, { useState } from 'react'

export const Fruit = () => {
    const [FruitsTodo,setFruitsTodo]=useState("");
    const [FruitsTodoArray,setFruitsTodoArray]=useState([]);
    const [index, setIndex] = useState(null);
    const [updateMode, setUpdateMode] = useState(false);
    // console.log(FruitsTodoArray)

    const InputHandler = (e) =>{
        // console.log(e.target.value)
        setFruitsTodo(e.target.value)
    }

    const fruitshanler= ()  => {
        setFruitsTodoArray([...FruitsTodoArray,FruitsTodo])
        setFruitsTodo("")
        // console.log(setFruitsTodoArray)
    }

    const DeleteButton = (index) =>{
        // console.log("button deleted click",index);
        window.alert("can you delete this task")

        const Filterdata =FruitsTodoArray.filter((e,i)=>{
            return (
                i !== index
            )
        })
        setFruitsTodoArray(Filterdata)
    }
    const editHandler = (element, index) => {
        setFruitsTodo(element);
        setIndex(index);
        setUpdateMode(true);
  };
   const updateHandler = () => {
    // array => todoList
    // newVal => text
    // index => index
    let updatedArray = todoList.map((e, i) => {
      if (i === index) {
        return text;
      } else {
        return e;
      }
    });
    // console.log("🚀 ~ updateHandler ~ updatedArray:", updatedArray);
    setTodoList(updatedArray);
    // localStorage.setItem("todoData", JSON.stringify(updatedArray));
    setFruitsTodo("");
    setUpdateMode(false);
  };

  return (
    <div className='bg-gray-200 min-h-screen flex-col gap-2 flex justify-center items-center '>
        <div className='border-2 p-5 rounded-2xl'>
            <h1>Add todo task</h1>
            <input value={FruitsTodo} onChange={(e)=>InputHandler(e)} type="text" placeholder='Please Enter the Task' className='bg-blue-50 rounded-2xl p-1.5 mt-2'/>
            <button onClick={()=>fruitshanler()} className='ml-3 mt-3 bg-emerald-300 rounded-2xl p-2'>Add Task</button>
        </div>

        <div>
            {FruitsTodoArray.map((e,i)=>{
                return (
                    <div className="min-w-full flex justify-between items-center gap-3 p-1 cursor-pointer">
                    <li>{e}</li>
                    <OctagonX  onClick={()=>DeleteButton(i)} color="red" strokeWidth={1.5} />

                        <div className="flex gap-2">
                <Edit className="cursor-pointer" onClick={() => editHandler(e, i)}/>
                <Trash className="cursor-pointer" color="red" onClick={() => DeleteButton(i)} />
              </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}
