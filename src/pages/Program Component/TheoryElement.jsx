import React from "react";
import SideNav2 from "../SideNav2";
import Navbar from "../../components/Navbar";
import data from "../../config/data";

const createTheory = (elements) => {
  return <Theory title={elements.theoryTitle} theory={elements.theory} />;
};

const Theory = (props) => {
  return (
    <>
      <h1 className="text-4xl" style={{ textAlign: "center" }}>
        Theory
      </h1>
      <h1 className="mb-4 mt-6 text-2xl">{props.title}</h1>
      <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
        {props.theory}
      </p>
    </>
  );
};

const TheoryElement = () => {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        {" "}
        <SideNav2 />
        <div className="container" style={{ padding: "1rem" }}>
         {createTheory(data.program1)}
        </div>
      </div>
    </>
  );
};

export default TheoryElement;
