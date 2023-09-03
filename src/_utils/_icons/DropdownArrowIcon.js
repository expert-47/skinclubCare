import React from "react";

const DropdownArrowIcon = ({ height, width, sx }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "12"}
      height={height || "7"}
      viewBox="0 0 12 7"
      fill="none"
      style={{ ...sx }}
    >
      <path
        d="M1 6L6 1L11 6"
        stroke="#4C4D4F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DropdownArrowIcon;
