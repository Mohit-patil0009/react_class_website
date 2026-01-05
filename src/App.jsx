import Data from "./constant/data.json";
import { useState } from "react";
import Header from "./componant/Header";
import { Body } from "./componant/Body";
import Footer from "./componant/Footer";
import StateCom from "./000.state/StateCom";
import UseEffect from "./0001.useEffect/UseEffct";
import UseEffectCounter from "./0001.useEffect/UseEffectCounter";
import TaskCounterArray from "./0001.useEffect/TaskCounterArray";
import User from "./0002.crud/User";


function App() {
  // console.log("🚀 ~ App ~ data:", data);
  return (
    <div>
      {/* <Header />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", flexWrap:"wrap",gap:"20px",margin:"20px" }}>
        {Data.map((e,i)=>{
          return <Body key={i} content={e}/>
        })}
      </div>
      <Footer /> */}
      {/* <StateCom/> */}
      {/* <UseEffect/> */}
      {/* <UseEffectCounter/> */}
      {/* <TaskCounterArray/> */}
      <User/>
    </div>
  );
}

export default App;
