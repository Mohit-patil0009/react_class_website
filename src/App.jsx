import Data from "./constant/data.json";
import { useState } from "react";
import Header from "./componant/Header";
import { Body } from "./componant/Body";
import Footer from "./componant/Footer";

function App() {
  // console.log("🚀 ~ App ~ data:", data);
  return (
    <div>
      <Header />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", flexWrap:"wrap",gap:"20px",margin:"20px" }}>
        {Data.map((e,i)=>{
          return <Body key={i} content={e}/>
        })}
        
        {/* <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body /> */}

      </div>
      <Footer />
    </div>
  );
}

export default App;
