import React from "react";
import { useParams } from "react-router-dom";


const CreateAim = (element) => { 
  return <Aim title={element.title} aim={element.aim} />;
};

const Aim = (props) => {
  return (
    <>
      <h1 className="text-4xl" style={{ textAlign: "center" }}>
        {props.title}
      </h1>
      <h1 className="mb-4 mt-6 text-2xl">Aim</h1>
      <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
        {props.aim}
        
      </p>
    </>
  );
};


const AimElement = (props) => {
  
  return (
      <div style={{ display: "flex" }}>
        <div className="container" style={{ padding: "1rem" }}>
         { CreateAim(props.value) }
        </div>
      </div>
  );
};

export default AimElement;
