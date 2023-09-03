import React, { useState } from "react";
import "./index.css";

const TextInputField = (props) => {
  const [value, setValue] = useState(props.value || "");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const { label, sx, hasError, error, ...inputProps } = props;

  return (
    <div className="text-input-field" style={{ ...sx }}>
      {label && (
        <label htmlFor={inputProps.id || ""} style={{ ...sx?.label }}>
          {label.titleizeAndHumanize()}
        </label>
      )}
      <input
        {...inputProps}
        value={value}
        style={{ ...sx?.input }}
        onChange={handleChange}
      />
      {hasError && <span style={{ ...sx?.errorSpan }}> {error}</span>}
    </div>
  );
};

export default TextInputField;
