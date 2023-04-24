import React, { useState } from "react";
import "./App.css";
import User from "./Components/User";
import UserNameContext from "./Context/UserNameContext";


function App() {
  const [username, setUserName] = useState("Mohammad Amin");

  console.log(UserNameContext)

  return (
    <UserNameContext.Provider value={username}>
    <div>
      <User/>
    </div>
    </UserNameContext.Provider>
  );
}

export default App;
