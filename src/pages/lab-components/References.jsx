import React from "react";


const CreateReferences = (element) => {
  return <References title={element.title} References={element.References} />;
};

const References = (props) => {
  return (
    <>
      <h1 className="text-4xl" style={{ textAlign: "center" }}>
        {props.title}
      </h1>
      <h1 className="mb-4 mt-6 text-2xl">References</h1>
      <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
        {props.References}
      </p>
    </>
  );
};


const ReferencesElement = (props) => {
  return (
      <div style={{ display: "flex" }}>
        <div className="container" style={{ padding: "1rem" }}>
         { CreateReferences(props.value) }
        </div>
      </div>
  );
};

export default ReferencesElement;
