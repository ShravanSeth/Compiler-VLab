import React from "react";
import SideNav2 from "../SideNav2";
import Navbar from "../../components/Navbar";

const Aim1 = () => {
  

  return (
    <> 
    <Navbar/>
   
    <div  style={{display: "flex"}}> <SideNav2/>
    <div style={{padding: "1rem"}}>
      <h1 className="text-4xl" style={{textAlign: "center"}}>Parser</h1>
      <h1 className="mb-4 mt-6 text-2xl">Aim</h1>
      <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero
        iste quod quibusdam maxime recusandae odit eveniet, aspernatur culpa
        provident error molestiae vitae corporis in vero est! Beatae, ipsum
        voluptatibus.
      </p>
    </div>
    </div>
  </> 
  );
};

export default Aim1;
