import React from "react";

import "./index.css";

const DividerWithText = ({ text }) => {
  return (
    <div className="divider-line">
      <hr style={{ color: "#4c4d4f20" }} />
      {text && <span>{text}</span>}
    </div>
  );
};

export default DividerWithText;
