import React, { useState } from "react";
import CourseHOC from "../HOCs/CourseHOC";

function Reactjs({ title, increasePrice, price }) {
  return (
    <div>
      <h3>Course Title : {title}</h3>
      <button onClick={increasePrice}>
        Increase Course Price (price={price})
      </button>
    </div>
  );
}

export default CourseHOC(Reactjs,'React js',2_200_000);
