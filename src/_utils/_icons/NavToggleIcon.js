import React from "react";

const NavToggleIcon = ({ height, width, sx }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "48"}
      height={height || "48"}
      viewBox="0 0 48 48"
      fill="none"
      style={{ ...sx }}
    >
      <rect width="48" height="48" rx="14" fill="#F8F8F8" />
      <path
        d="M15 24H33M15 18H33M15 30H33"
        stroke="#4C4D4F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NavToggleIcon;
