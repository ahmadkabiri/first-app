import React from 'react'

function Input({lable,name,formik,type="text"}) {
  return (
    <div className="formControl">
          <label htmlFor={name}>{lable}</label>
          <input
            id={name}
            type={type}
            name={name}
            {...formik.getFieldProps(name)}
          />
          {formik.errors[name] && formik.touched[name] && (
            <div className="error">{formik.errors[name]}</div>
          )}
        </div>
  )
}

export default Input