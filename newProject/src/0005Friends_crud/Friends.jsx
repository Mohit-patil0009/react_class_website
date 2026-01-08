import { ClosedCaptionIcon, BadgeX } from "lucide-react";
import React, { useState } from 'react'

export const Friends = () => {
    const [frienstodo,setfriendstodo] = useState("");
    const [frienstodoarray,setfriendstodoarray] = useState([]);

    const Frindsvalue = (e) =>{
        // console.log(e.target.value)
        setfriendstodo(e.target.value)
    }

    const Friendstask = () =>{
        setfriendstodoarray([...frienstodoarray,frienstodo]);
        setfriendstodo("")
    }

    const friendsdelete = (index) => {
        // console.log("Button is deleyed clicked",index)

        const filterdata =frienstodoarray.filter((e,i)=>{
            return (
                i !== index
            )
        })
        setfriendstodoarray(filterdata)

    }

  return (
    <div className='bg-indigo-200 min-h-screen flex justify-center items-center'> 
        <div className='border-2 p-4 rounded-2xl felx justify-center items-center'>
            <h1>Add Todo Task</h1>
            <input onChange={(e)=>Frindsvalue(e)} value={frienstodo} type="text" placeholder='Please Enter Your Task' className='bg-blue-100 rounded-2xl p-1'/>
            <button onClick={()=>Friendstask()} className='bg-cyan-700 p-1.5 ml-2  rounded-2xl'>Add task</button>
        </div>

        <div>
            {frienstodoarray.map((e,i)=>{
                return (
                    <div className="min-w-full  flex justify-between items-center gap-3 p-1 cursor-pointer">
                        <li>{e}</li>
                        <BadgeX color="red" onClick={()=>friendsdelete(i)}/>
                    </div>
                )   
            })}
        </div>
    </div>
  )
}
