import React from "react";

function SelectComponent({ selectOptions, name, formik }) {
  return (
    <div className="formControl">
      <select {...formik.getFieldProps(name)} name={name}>
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error"> {formik.errors[name]}</div>
      )}
    </div>
  );
}

export default SelectComponent;
