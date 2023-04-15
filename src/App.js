import React, { useState } from "react";
import useCounter from "./hooks/useCounter";

export default function App() {

const [count , addCount , minusCount] = useCounter(20)


 
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={()=>addCount()}>Add</button>
      <button onClick={() => minusCount()}>Minus</button>
    </div>
  );
}
