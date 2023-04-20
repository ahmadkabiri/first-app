import { useState, useRef, useEffect } from "react";
// import "./App.css";
import Reactjs from "./components/courses/Reactjs";
import Javascript from "./components/courses/Javascript";

export default function App() {
  return (
    <div>
      <Javascript></Javascript>
      <hr />
      <Reactjs></Reactjs>
    </div>
  );
}
