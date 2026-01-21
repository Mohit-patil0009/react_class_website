import { ClosedCaptionIcon, OctagonX ,Pointer,Trash,BookType} from "lucide-react";
import React, { useState } from 'react'

export const Multiple = () => {
   let [user, setUser] = useState({
      name: "",
      age: "",
    });

  const [userdata,setuserdata] = useState([])
  console.log("🚀 ~ Multiple ~ userdata:", userdata)

   const eventHandler = (e) => {
  e.preventDefault();

  // UPDATE MODE
  if (updateMode) {
    const updatedArray = userdata.map((e, i) =>
      i === index ? user : e
    );
    setuserdata(updatedArray);
    setUpdateMode(false);
    setIndex(null);
  } 
  // ADD MODE
  else {
    if (!user.name || !user.age) return; // optional validation
    setuserdata([...userdata, user]);
  }

  setUser({ name: "", age: "" });
};


    const deletehandler = (index) =>{
        // console.log("button deleted click",index);
        window.alert("can you delete this task")

        const Filterdata =userdata.filter((e,i)=>{
            return (
                i !== index
            )
        })
        setuserdata(Filterdata)
    }

    const [index, setIndex] = useState(null);
      const [updateMode, setUpdateMode] = useState(false);
      // console.log("🚀 ~ UserFormTask ~ user:", user)


    const editHandler = (element, idx) => {
      setUser(element);
      setIndex(idx);
      setUpdateMode(true);
  };

  const updateHandler = () => {
    let updatedArray = userdata.map((e, i) => {
      if (i === index) {
        return user;
      } else {
        return e;
      }
    });
    console.log("🚀 ~ updateHandler ~ updatedArray:", updatedArray);
    setuserdata(updatedArray);
    setUser({ name: "", age: "" });
    setUpdateMode(false);
  };

  const Delete = (i) => {
    const filteredData = userData.filter((e, index) => index !== i);
    setuserdata(filteredData);
  };


  return (
    <div className='flex justify-center items-center flex-col'>
        <form onSubmit={(e)=>eventHandler(e)} className='flex justify-center items-start flex-col gap-2 border p-3 rounded-2xl border-black'>
    
            <label htmlFor="name">name</label>
            <input type="text" value={user.name} onChange={(e)=>setUser({...user , name: e.target.value})} placeholder='Enter your name' name='name' className='border border-2 rounded-2xl p-1' />

            <label htmlFor="age">Age</label>
            <input type="number" value={user.age} onChange={(e)=>setUser({...user , age: e.target.value})} placeholder='Enter your age' name='age' className='border border-2 rounded-2xl p-1' />
 
            {/* <button className='w-full cursor-pointer bg-black text-white rounded-2xl p-1' > Add Data </button> */}


            {updateMode ? (
    <button
      type="button" onClick={updateHandler} className="w-full bg-green-600 text-white rounded-2xl p-1">Update</button>
) : (
  <button type="submit" className="w-full bg-black text-white rounded-2xl p-1">Add Data</button>
)}
        </form>    
          <div>
            {userdata.map((e,i)=>{
              return (
                <div key={i} className="flex gap-6 justify-center items-center border-black">
                <li >{e.name}</li>
                <li>{e.age}</li>
                <BookType color="green" onClick={()=>editHandler(e,i)} />
                <Trash  color="red" onClick={()=>deletehandler(i)} />
                </div>
              )
            })}
          </div>
        
    </div>
  )
}
