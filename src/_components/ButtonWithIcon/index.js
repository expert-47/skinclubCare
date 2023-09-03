import React from "react";

import "./index.css";

const ButtonWithIcon = ({
  type = "button",
  icon,
  label,
  onClick = () => {},
  sx = {},
}) => {
  return (
    <button
      type={type}
      className="button-with-icon"
      style={{ ...sx }}
      onClick={onClick}
    >
      {icon && (
        <span className="icon" style={{ ...sx.icon }}>
          {icon}
        </span>
      )}
      <span style={{ ...sx.text }}>{label}</span>
    </button>
  );
};

export default ButtonWithIcon;
