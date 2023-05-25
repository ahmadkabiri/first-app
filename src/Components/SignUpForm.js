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
    phoneNumber: "",
    passwordConfirm: "",
    gender : ""
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
    name: Yup.string()
      .required("Name is required")
      .min(6, "Name length is not valid"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{11}$/, "Invalid Phone Number")
      .nullable(),
    passwordConfirm: Yup.string()
      .required("Password Confirmation is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),

    gender : Yup.string().required("Gender is required")
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
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
            name="name"
            // value={formik.values.name}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("name")}
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
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="phoneNumber">PhoneNumber</label>
          <input
            id="phoneNumber"
            type="text"
            // onChange={changeHandler}
            // value={userData.password}
            name="phoneNumber"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className="error">{formik.errors.phoneNumber}</div>
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
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="password">Password Confirmation</label>
          <input
            id="passwordConfirm"
            type="text"
            // onChange={changeHandler}
            // value={userData.password}
            name="passwordConfirm"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("passwordConfirm")}
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div className="error">{formik.errors.passwordConfirm}</div>
          )}
        </div>
        <div className="formControl">
          <input
            type="radio"
            id="0"
            name="gender"
            value="0"
            onChange={formik.handleChange}
            checked={formik.values.gender==="0"}
          />
          <label htmlFor="0">Male</label>
          <input
            type="radio"
            id="1"
            name="gender"
            value="1"
            onChange={formik.handleChange}
            checked={formik.values.gender==="1"}

          />
          <label htmlFor="1">Female</label>
        </div>
        <button type="submit" disabled={!formik.isValid}>
          submit
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;

// 1. managing state
// 2. handling form submission
// 3. validation - errors message
// => formik

//gender :  0 or 1 => male : female
