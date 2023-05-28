import React from "react";

function Input({ label, name, formik, type = "text" }) {
  return (
    <div className="formControl">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        {...formik.getFieldProps(name)}
        style={
          formik.errors[name] && formik.touched[name] && { borderColor: "red" }
        }
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="error"> {formik.errors[name]}</div>
      )}
    </div>
  );
}

export default Input;
