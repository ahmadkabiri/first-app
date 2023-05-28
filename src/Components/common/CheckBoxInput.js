import react from "react";
import React from "react";

function CheckBoxInput({ name, formik, checkBoxOptions }) {
  return (
    <div className="formControl">
      <label>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <div className="check">
        {checkBoxOptions.map((item) => (
          <react.Fragment key={item.value}>
            <input
              type="checkbox"
              id={item.value}
              name={name}
              value={item.value}
              onChange={formik.handleChange}
              onClick={() => formik.setFieldTouched(name, true)}
              checked={formik.values[name].includes(item.value)}
            />
            <label htmlFor={item.value}>{item.label}</label>
          </react.Fragment>
        ))}
        {formik.errors[name] && formik.touched[name] && (
          <div className="error"> {formik.errors[name]}</div>
        )}
      </div>
    </div>
  );
}

export default CheckBoxInput;
