import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  // const validate = (values) => {
  //   console.log(values);
  //   // errors => {}
  //   //errors.name
  //   //errors.email
  //   //errors.password

  //   let errors = {};

  //   if (!values.name) {
  //     errors.name = "name is required";
  //   }
  //   if (!values.email) {
  //     errors.email = "email is required";
  //   }
  //   if (!values.password) {
  //     errors.password = "password is required";
  //   }
  //   return errors;
  // };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.touched);

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
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            // onChange={changeHandler}
            // value={userData.email}
            email="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            // onChange={changeHandler}
            // value={userData.password}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
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
