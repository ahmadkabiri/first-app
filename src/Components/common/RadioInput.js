import React from "react";

function RadioInput({ lable, name, formik, radioOptions }) {
  return (
    <div className="formControl">
      {radioOptions.map((item) => {
        <React.Fragment key={item.value}>
          <input
            type="radio"
            id={item.value}
            name={name}
            value={item.value}
            onChange={formik.handleChange}
            checked={formik.values.gender === "0"}
          />
          <label htmlFor={item.value}>{lable}</label>
        </React.Fragment>;
      })}
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
}

export default RadioInput;
