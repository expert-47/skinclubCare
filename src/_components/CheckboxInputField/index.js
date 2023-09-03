import React, { useState } from "react";
import "./index.css";

const CheckboxInputField = (props) => {
  const [checked, setChecked] = useState(props.checked || "");

  const handleChange = (e) => {
    const value = e.target.checked;
    setChecked(value);

    if (props.onChange) {
      props.onChange(value);
    }
  };
  return (
    <div className="checkbox-input-field" style={{ ...props.sx }}>
      <input
        {...props}
        checked={checked}
        style={{ ...props.sx?.input }}
        onChange={handleChange}
      />
      {props.label && (
        <label htmlFor={props.id || ""} style={{ ...props.sx?.label }}>
          {props.label}
        </label>
      )}
    </div>
  );
};

export default CheckboxInputField;
