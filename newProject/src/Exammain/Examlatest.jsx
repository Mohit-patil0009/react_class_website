// import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export  function Examlatest() {

let [todo,setTodo]= useState();
let [todoArray,setTodoArray] = useState([]);
let [updateMode,setUpdateMode]= useState(false);
let [index ,setIndex] = useState(null);
const inputhandler = (e) => 
{
// console.log("🚀 ~ inputhandler ~ e:", e)
// console.log("🚀 ~ TodoPractice ~ todo:", todo)

setTodo(e.target.value);

}

const addhandler = () =>{

  if(todo){
setTodoArray([...todoArray,todo]);
  setTodo("");
  }else{
    window.alert("plz enter the todo")
  }
  
console.log("🚀 ~ TodoPractice ~ todoArray:", todoArray)

}

const deleteHandler = (index) =>{
const filteredData = todoArray.filter((e,i) =>{
  return i !== index;
});
setTodoArray(filteredData);
setUpdateMode(false)
setTodo("");
}

const updateModeHandler =(e,i) =>{
  setUpdateMode(true);
  setTodo(e)
  setIndex(i);

}
const updateHandler = () => {
let updatedArray = todoArray.map((e,i) => {
  if(i === index){
    return todo;
  }else{
    return e;
  }
});

if(updatedArray == ""){
 alert("add")
}else
{
   setTodoArray(updatedArray);
setTodo("");
  setUpdateMode(false);
}




};
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 flex justify-center items-center'>
      <div className='max-w-3xl w-full'>
        
        {/* Header Section */}
        <div className='flex gap-3 flex-col items-center mb-12'>
          <h1 className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 animate-pulse mb-4'>
            Todo Practical
          </h1>
          <div className='h-1 w-40 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 rounded-full'></div>
        </div>

        {/* Input Section */}
        <div className='backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-8 mb-10'>
          <div className='flex gap-4 flex-wrap justify-center'>
            <input 
              value={todo} 
              type="text" 
              name="" 
              id="" 
              onChange={(e)=> inputhandler(e)} 
              placeholder='✨ Enter your todo...' 
              className='flex-1 min-w-[280px] px-6 py-4 bg-slate-800/60 border-2 border-cyan-400/50 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-400/30 transition-all duration-300 shadow-lg shadow-cyan-500/30' 
            />

            {updateMode? 
              <button 
                onClick={()=> updateHandler()} 
                className='px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/80 hover:scale-105 active:scale-95'
              >
                Update
              </button>
              :
              <button 
                onClick={()=> addhandler()} 
                className='px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 hover:scale-105 active:scale-95'
              >
                Add
              </button>
            }
          </div>
        </div>

        {/* Todo List */}
        <div className='flex gap-5 flex-col'>
          {
            todoArray.map((e,i)=>{
              return(
                <div 
                  key={i} 
                  className='backdrop-blur-xl bg-gradient-to-r from-slate-800/60 to-slate-700/60 rounded-2xl border border-white/20 p-6 shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:scale-[1.02] group'
                >
                  <div className='flex justify-between items-center gap-x-4 flex-wrap'>
                    <ul className='text-xl text-white font-medium flex-1 group-hover:text-cyan-300 transition-colors duration-300 break-words'>{e}</ul>
                    <div className='flex gap-3'>
                      <button 
                        onClick={()=> updateModeHandler(e,i)} 
                        className='px-6 py-3 bg-blue-500/30 hover:bg-blue-500/50 border border-blue-400/40 hover:border-blue-400 text-blue-300 hover:text-blue-200 font-semibold rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-blue-500/20'
                      >
                        Update
                      </button>
                      <button 
                        onClick={()=> deleteHandler(i)} 
                        className='px-6 py-3 bg-red-500/30 hover:bg-red-500/50 border border-red-400/40 hover:border-red-400 text-red-300 hover:text-red-200 font-semibold rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-red-500/20'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        {/* Empty State */}
        {todoArray.length === 0 && (
          <div className='text-center py-20'>
            <p className='text-gray-300 text-2xl font-light'>
              No tasks yet. Start adding your todos! 🚀
            </p>
          </div>
        )}
        
      </div>
    </div>
  )
}