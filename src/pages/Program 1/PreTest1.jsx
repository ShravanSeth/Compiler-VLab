import React from "react";
import SideNav2 from "../SideNav2";
import Navbar from "../../components/Navbar";

const PreTest1 = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        {" "}
        <SideNav2 />
        <div className="container" style={{ padding: "1rem" }}>
          <h1 className="text-4xl" style={{ textAlign: "center" }}>
            Pre-Test
          </h1>
          <div class="flex justify-left">
            <h1 className="text-2xl">Questions</h1>  
            <div >
              <div class="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault1"
                >
                  Default radio
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault2"
                >
                  Default checked radio
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreTest1;
