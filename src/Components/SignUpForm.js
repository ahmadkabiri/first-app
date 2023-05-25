import React, { useState } from "react";
import { useFormik } from "formik";
function SignUpForm() {
  //   const [userData, setUserData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });

  //   const changeHandler = (e) => {
  //     console.log(e.target.value);
  //     setUserData({ ...userData, [e.target.name]: e.target.value });
  //   };
  // 1.
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  // 2.
  const onSubmit = (values) => {
    console.log(values);
  };
  // 3.
  const validate = (values) => {
    console.log(values);
    // errors => {}
    //errors.name
    //errors.email
    //errors.password

    let errors = {};

    if (!values.name) {
      errors.name="name is required"
    }
    if (!values.email) {
      errors.email = "email is required"
    }
    if (!values.password) {
      errors.password = "password is required"
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

    console.log(formik.errors);

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     console.log("submitted...");
  //     // Call the server => submit data => post => user
  //   };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            // onChange={changeHandler}
            // value={userData.name}
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
          />
        </div>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            // onChange={changeHandler}
            // value={userData.email}
            value={formik.values.email}
            email="email"
            onChange={formik.handleChange}
          />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            // onChange={changeHandler}
            // value={userData.password}
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;

// 1. managing state
// 2. handling form submission
// 3. validation - errors message
// => formik
