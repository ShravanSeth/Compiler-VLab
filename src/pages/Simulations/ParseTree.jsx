import React, { useState } from "react";
import Navbar from '../../components/Navbar';
import '../Program Component/Simulation.css'
import SideNav2 from '../SideNav2';

const ParseTree = () => {
  const [generated, setGenerated] = useState(false);

  const [step, setStep] = useState(0);

  const grammar = "T = T + T | T * T\nT = a | b | c";

  const images = [
    {
      uri: require("../../assets/parse-tree1.png"),
    },
    {
      uri: require("../../assets/parse-tree2.png"),
    },
    {
      uri: require("../../assets/parse-tree3.png"),
    },
    {
      uri: require("../../assets/parse-tree4.png"),
    },
    {
      uri: require("../../assets/parse-tree5.png"),
    },
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      alert("Parsing Completed!");
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      alert("This is the very first step of parse tree generation.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="simulation">
        <SideNav2 />
        <div
          className="container"
          style={{ padding: "1rem", justifyContent: "center" }}
        >
          <h1 className="text-4xl" style={{ textAlign: "center" }}>
            Simulation
          </h1>
          <h1 className="mb-4 mt-6 text-2xl text-center">
            Generating a Parse Tree
          </h1>
          <div className="program">
            <h1 className="text-xl text-left">Production Rule</h1>
            <div className="flex pt-5 justify-center">
              <div className="mb-3 xl:w-96">
                <textarea
                  className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none block"
                  defaultValue={grammar} disabled
                  label="Grammar"
                  id="TextArea"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <h1 className="text-xl text-left">Input String</h1>
            <div className="flex pt-5 justify-center">
              <div className="mb-3 xl:w-96">
                <textarea
                  className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none block"
                  defaultValue={"a*b+c"} disabled
                  label="Input String"
                  id="TextArea"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="flex space-x-2 justify-center">
              <button
                type="button"
                onClick={() => setGenerated(true)}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-zinc-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Generate
              </button>
              {generated && <button type="button" onClick={() => {
                  setGenerated(false);
                  setStep(0);
                }} className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Reset</button>}
            </div>

           {generated && <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    className="rounded-t-lg"
                    src={images[step].uri}
                    alt="Parse Tree"
                  />
                </a> 
                <div className="p-6">
                  <div className="flex items-center justify-center">
                    <div
                      className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
                      role="group"
                    >
                      <button
                        type="button" onClick={handlePrevious}
                        className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                      >
                        previous
                      </button>
                      <button
                        type="button" onClick={handleNext}
                        className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                      >
                        next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ParseTree;
