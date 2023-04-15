import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
export default function App() {

  const [value , setValue] = useLocalStorage('sabz',"ttt")
  return (
    <div className="App">
      <input type="text" value={value} onChange={(event)=>setValue(event.target.value)} />
    </div>
  );
}
