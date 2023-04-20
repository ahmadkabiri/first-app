import { useState, useRef, useEffect } from "react";
import "./App.css";
import ToggleNoteList from "./components/ToggleNoteList";



export default function App() {
  return (
    <div className="app">
      <div className="container">
        <ToggleNoteList></ToggleNoteList>
      </div>
    </div>
  );
}
