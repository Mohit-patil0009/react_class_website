import { useState } from "react";

function StateCom() {
  let [Mohit , setMohit] = useState(0);
  // console.log("🚀 ~ StateCom ~ count:", count);
function increment(){
  // console.log("Increment button clicked");
  setMohit(Mohit + 1);
}

function decrement(){
  // console.log("🚀 ~ decrement ~ decrement:", decrement)
  setMohit(Mohit - 1);
}

function multiplication(){
  // console.log("🚀 ~ multiplication ~ multiplication:", multiplication)
  setMohit(Mohit * 2);
}

function Division(){
  // console.log("🚀 ~ Division ~ Division:", Division)
  setMohit(Mohit / 2);
}
  

  return (
    <div className="flex justify-center items-center flex-col bg-amber-100 h-screen mb-5">
      <h1>Count is {Mohit}</h1>
      <button onClick={()=>increment()} className="border ">
        Increment
      </button>
      <br />
      <button onClick={()=>decrement()} className="border">
        Decrement 
      </button>
      <br />
      <button onClick={()=>multiplication()} className="border">
        multiplication
      </button>
      <br />
      <button onClick={()=>Division()} className="border">
        Division
      </button>

    </div>
  );
}

export default StateCom;
