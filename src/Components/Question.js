import React, { useState } from "react";
import {AiOutlineMinus , AiOutlinePlus} from 'react-icons/ai' 
import WithShowToggle from "./HOCs/WithShowToggle";

// + or - icons
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, info, title , showInfo, toggleShowInfoHandler }) => {

  console.log( id, info, title , showInfo, toggleShowInfoHandler )

  return (
    <article className="question" onClick={toggleShowInfoHandler}>
      <header>
        <h4>{title}</h4>
        <button className="btn">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default WithShowToggle(Question);
