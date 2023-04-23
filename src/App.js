import React, { useId, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import "./App.css";

function App() {

  const usernameID = useId()
  const passwordID = useId()
  const lastnameID = useId()


  console.log("UserName ID", usernameID);
  console.log("Password ID", passwordID);
  console.log("LastName ID", lastnameID);

 
  return (
    <div>
    <form action="">
      <label htmlFor={usernameID}>Your Username:</label>
      <input type="text" id={usernameID}/>
      <hr />
      <label htmlFor={passwordID}>Your Password:</label>
      <input type="text" id={passwordID} placeholder="Password" />
    </form>
    </div>
  );
}

export default App;
