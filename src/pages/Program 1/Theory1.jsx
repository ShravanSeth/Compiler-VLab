import React from "react";
import SideNav2 from "../SideNav2";
import Navbar from "../../components/Navbar";

const Theory1 = () => {
  

  return (
    <> 
    <Navbar/>
   
    <div  style={{display: "flex"}}> <SideNav2/>
    <div className="container" style={{padding: "1rem"}}>
      <h1 className="text-4xl" style={{textAlign: "center"}}>Theory</h1>
      <h1 className="mb-4 mt-6 text-2xl">What is a Comment?</h1>
      <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
      A comment is text in a program's code, script, or another file that is not meant to be seen by the user running the program. However, is seen when viewing the source code.
      Comments help make code easier to understand by explaining what is happening and help prevent portions of a program from executing.
      </p>
    </div>
    </div>
  </> 
  );
};

export default Theory1;
