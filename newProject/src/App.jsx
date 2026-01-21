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
import { Car } from "./0003crud_practice/Car";
import { Fruit } from "./0004fruits_crud/Fruit"
import {Friends} from "./0005Friends_crud/Friends"
import {Mohit} from "./0006Mohit_crud/Mohit"
import { Todo3 } from "./0007crud/Todo3"
import {Exam} from "./exam_class/Exam"
import {Examlatest} from "./Exammain/Examlatest"
import {SelectInput} from "./Input_react/SelectInput"
import {CheckBoxInput} from "./Input_react/CheckBoxInput"
// import {MulShashank} from "./008Multiple_shashank/MulShashank";
 
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
      {/* <User/> */}
      {/* <Car /> */}
      {/* <Fruit/> */}
      {/* <Friends/> */}
      {/* <Mohit/> */}
      {/* <Todo3/> */}
      {/* <Multiple/> */}
      {/* <MulShashank/> */}
      {/* <Exam/> */}
      {/* <Examlatest/> */}
      {/* <SelectInput/> */}
      {/* <CheckBoxInput/> */}
    </div>
  );
}

export default App;
