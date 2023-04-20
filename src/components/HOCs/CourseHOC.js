import React from "react";

function CourseHOC(OriginalComponent) {
  function NewComponent() {
    return(
        <OriginalComponent></OriginalComponent>
    )
  }

  return NewComponent
}

export default CourseHOC;
