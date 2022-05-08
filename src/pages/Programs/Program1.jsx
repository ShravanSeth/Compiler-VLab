import React from "react";
import data from "../../config/data";
import AimElement from "../Program Component/AimElement";
import TheoryElement from "../Program Component/TheoryElement";

const index = 0;
const Program1 = () => {
  return (
    <>
      <AimElement value={data.program1}/>
      <TheoryElement value={data.program1}/>
    </>
  );
};

export default Program1;
