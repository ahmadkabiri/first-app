import { useState, useEffect } from "react";
import "./App.css";
import useInput from "./hooks/useInput";
export default function App() {
  const [usernameValue, userNameBinding , usernameReset] = useInput("");
  const [passwordValue, passwordBinding , passwordReset] = useInput("");

  const submitHandler = (event) => {
    event.preventDefault();
    alert("hello");
    usernameReset() 
    passwordReset()
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={(event) => submitHandler(event)}>
          <input
            type="text"
            placeholder="Username"
            {...userNameBinding}
          />
          <input
            type="password"
            placeholder="Password"
            {...passwordBinding}
          />
          <button>login</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}
