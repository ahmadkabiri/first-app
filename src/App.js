import React, { useState } from "react";
import "./App.css";

export default function App({ counter, onIncrement, onDecrement , onRestart }) {
  // const [counter,setCounter] = useState(0) ;

  // const incrementHandler = () => {
  //   setCounter((counter) => counter + 1);
  // };

  // const decrementHandler = () => {
  //   setCounter((counter) => counter - 1);
  // };

  // const resetCounter = () => {
  //   setCounter(0);
  // };

  return (
    <div className="container">
      <h1 id="num">12</h1>
      <div className="btns">
        <button className="dec" onClick={onDecrement}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="reset" onClick={onRestart}>
          <i className="fas fa-redo"></i>
        </button>
        <button className="inc" onClick={onIncrement}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}
