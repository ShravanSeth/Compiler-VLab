import React from "react";
import { useParams } from "react-router-dom";
import SideNav2 from "./SideNav2";
import Navbar from "../components/Navbar";
import AimElement from "./lab-components/Aim"
import programs from "../data/programs";
import ProcedureElement from "./lab-components/Procedure";
import TheoryElement from "./lab-components/Theory";
import ReferencesElement from "./lab-components/References";


const Data = (props) => {
    let program=useParams();
    console.log(program)
  if(props.title==="aim") 
    return (<AimElement value={programs[0]} />)
    else if(props.title=== "procedure")return (<ProcedureElement value={programs[0]} />);
    else if(props.title=== "theory")return (<TheoryElement value={programs[0]} />);
    else if(props.title=== "reference")return (<ReferencesElement value={programs[0]} />);
    
  
}

const LabElement = (props) => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideNav2 />
        {Data(props)}
      </div>
    </>
  );


};

export default LabElement;
