import React from "react";


const createProcedure = (element) => {
  return <Procedure procedureTitle={element.title} procedure={element.procedure} />;
};

const Procedure = (props) => {
  return (
    <>
      <h1 className="text-4xl" style={{ textAlign: "center" }}>
        Procedure
      </h1>
      <h1 className="mb-4 mt-6 text-2xl">{props.procedureTitle}</h1>
      <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
        {props.procedure}
      </p>
    </>
  );
};

const ProcedureElement = (props) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        {" "}
        <div className="container" style={{ padding: "1rem" }}>
         { createProcedure(props.value) }
        </div>
      </div>
    </>
  );
};

export default ProcedureElement;
