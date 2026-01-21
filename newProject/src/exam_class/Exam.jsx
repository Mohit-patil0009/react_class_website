import React, { useState } from 'react'
import {Pointer, Trash} from "lucide-react"

export const Exam = () => {
    const [examtodo,setExamtodo] = useState("");
    console.log("🚀 ~ Exam ~ examtodo:", examtodo)
    const [examarray,setexamarray] = useState([]);
    // console.log("🚀 ~ Exam ~ examarray:", examarray)
    

    const inputhandler = (e) =>{
        setExamtodo(e.target.value)
    }

    const datahandler = ()=>{
        setexamarray([...examarray,examtodo])
        setExamtodo("")
    }

    const deleteHandler = (index) =>{
    console.log("🚀 ~ deleteHandler ~ index:", index)
    // windows.alert("can you delete this task")

    const filterdata =examarray.filter((e,i)=>{
           return (
            i !== index
           ) 
        })
        setexamarray(filterdata)
    }
  return (
    <div className='bg-amber-100 flex justify-center items-center flex-col min-h-screen'>
        <div className='bg-amber-400 flex justify-center items-center flex-col p-5 border-2 rounded-2xl '>
            <h1 className='border-2 p-2 rounded-2xl'>Todo List</h1>
            <input value={examtodo} onChange={(e)=>inputhandler(e)} className='border-2 p-0.5 rounded-2xl mt-2' type="text" placeholder='Enter your name'/>
            <button onClick={()=>datahandler()} className='bg-cyan-300 mt-2 p-1 rounded-2xl w-full'>Add Item</button>
        </div>

        <div>
            {examarray.map((e,i)=>{
                return (
                    <div key={i} className='flex gap-2'  >
                        <li>{e}</li>
                        <Trash color='red' className=' cursor-pointer' onClick={()=>deleteHandler(i)}/>

                    </div>
                )
            })}
        </div>
    </div>
  )
}
