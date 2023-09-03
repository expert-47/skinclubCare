import React from "react";
import "./index.css";

const KeyValueText = ({ keyText, value, sx }) => {
  return (
    <div className="key-value-text" style={{ ...sx }}>
      <span className="key">{keyText}</span>: <span className="value">{value}</span>
    </div>
  );
};

export default KeyValueText;
