import React from "react";
import "./index.css";

const AppointmentCard = ({
  heading,
  actionIcon,
  content,
  contentDescription,
  footerContent,
  sx,
}) => {
  return (
    <div className="appointment-card" style={{ ...sx }}>
      <div className="card-heading">
        <div className="heading-text">{heading}</div>
        {actionIcon && <div className="action-icon">{actionIcon}</div>}
      </div>
      <div className="card-content">{content}</div>
      <div className="content-description">{contentDescription}</div>
      {footerContent && <div className="card-footer">{footerContent}</div>}
    </div>
  );
};

export default AppointmentCard;
