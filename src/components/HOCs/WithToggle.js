import React from "react";
import { useState } from "react";

function WithToggle(OriginalComponent) {
    
    const NewComponent = () => {
      const [isShow, setIsShow] = useState(false);
    
      const toggleHandler = () => {
        setIsShow((prevIsShow) => !prevIsShow);
      };
    return <OriginalComponent isShow={isShow} toggleHandler={toggleHandler}></OriginalComponent>;
  };

  return NewComponent
}

export default WithToggle;
