import React, { useState } from "react";
import "./App.css";
import User from "./Components/User";
import UsernameProvider from "./Context/UserNameContext";



function App() {

  // console.log(UserNameContext)

  return (
    <UsernameProvider >
    <div>
      <User/>
    </div>
    </UsernameProvider>
  );
}

export default App;
