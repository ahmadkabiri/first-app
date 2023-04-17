import { useState, useRef, useEffect } from "react";
// import "./App.css";
export default function App() {
  const userNameInputRef = useRef();

  useEffect(() => {
    console.log(userNameInputRef);
    userNameInputRef.current.focus();
  }, []);

  const addNewValue = () => {
    userNameInputRef.current.value = "Ahmad Kabiri";
  };

  return (
    <div>
      <input type="text" placeholder="UserName" ref={userNameInputRef} />
      <button onClick={addNewValue}>Add New Value</button>
    </div>
  );
}
