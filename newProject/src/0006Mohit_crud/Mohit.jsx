import { ClosedCaptionIcon, OctagonX } from "lucide-react";
import React, { useState } from 'react'

export const Mohit = () => {
    const [MohitTodo,setMohitTodo]=useState("");
    const [MohitTodoArray,setMohitTodoArray]=useState([]);
    // console.log(MohitTodoArray)

    const InputHandler = (e) =>{
        // console.log(e.target.value)
        setMohitTodo(e.target.value)
    }

    const Mohitshanler= ()  => {
        setMohitTodoArray([...MohitTodoArray,MohitTodo])
        setMohitTodo("")
        // console.log(setFruitsTodoArray)
    }

    const DeleteButton = (index) =>{
        // console.log("button deleted click",index);
        window.alert("can you delete this task")

        const Filterdata =MohitTodoArray.filter((e,i)=>{
            return (
                i !== index
            )
        })
        setMohitTodoArray(Filterdata)
    }

  return (
    <div className='bg-gray-200 min-h-screen flex-col gap-2 flex justify-center items-center '>
        <div className='border-2 p-5 rounded-2xl'>
            <h1>Add todo task</h1>
            <input value={MohitTodo} onChange={(e)=>InputHandler(e)} type="text" placeholder='Please Enter the Task' className='bg-blue-50 rounded-2xl p-1.5 mt-2'/>
            <button onClick={()=>Mohithanler()} className='ml-3 mt-3 bg-emerald-300 rounded-2xl p-2'>Add Task</button>
        </div>

        <div>
            {MohitTodoArray.map((e,i)=>{
                return (
                    <div className="min-w-full flex justify-between items-center gap-3 p-1 cursor-pointer">
                    <li>{e}</li>
                    <OctagonX  onClick={()=>DeleteButton(i)} color="red"     strokeWidth={1.5} />

                        <div className="flex gap-2">
                <Edit
                  className="cursor-pointer"
                  onClick={() => editHandler(e, i)}
                />
                <Trash
                  className="cursor-pointer"
                  color="red"
                  onClick={() => Check(i)}
                />
              </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
