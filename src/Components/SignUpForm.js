import React, { useState } from "react";

function SignUpForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited...");
    // Call the server => submit data => post => user
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={changeHandler}
            value={userData.name}
            name="name"
          />
        </div>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            onChange={changeHandler}
            value={userData.email}
            email="email"
          />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            onChange={changeHandler}
            value={userData.password}
            name="password"
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;

// 1. managing state
// 2. handling form submission
// 3. validation - error message
// => formik

