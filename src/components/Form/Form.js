import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();

    let userInfo = {
      firstName,
      lastName,
      email,
    };

    fetch("https://ahmadkabiri-be918-default-rtdb.firebaseio.com/users.json",{
      method:"POST",
      body:JSON.stringify(userInfo)
    })
    .then(resopnse => console.log(resopnse))

  };

  return (
    <div className="form-container">
      <form
        className="register-form"
        autoComplete="off"
        onSubmit={(event) => registerHandler(event)}
      >
        <input
          id="first-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          id="last-name"
          value={lastName}
          onChange={(event) => setlastName(event.target.value)}
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

        <input
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
