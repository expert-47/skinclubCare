import React from "react";

const NotificationBellIcon = ({ height, width, sx }) => {
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
        d="M25.73 33C25.5542 33.3031 25.3019 33.5547 24.9982 33.7295C24.6946 33.9044 24.3504 33.9965 24 33.9965C23.6496 33.9965 23.3054 33.9044 23.0018 33.7295C22.6982 33.5547 22.4458 33.3031 22.27 33M30 20C30 18.4087 29.3679 16.8826 28.2426 15.7574C27.1174 14.6321 25.5913 14 24 14C22.4087 14 20.8826 14.6321 19.7574 15.7574C18.6321 16.8826 18 18.4087 18 20C18 27 15 29 15 29H33C33 29 30 27 30 20Z"
        stroke="#4C4D4F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NotificationBellIcon;
