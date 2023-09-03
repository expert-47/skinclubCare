import React from "react";
import "./index.css";
import {
  LeafUpIcon,
  LeafDownIcon,
  PaintBoardUpIcon,
  PaintBoardDownIcon,
} from "_utils/_icons";

const LogosBackground = () => {
  return (
    <div className="logos-background">
      <span className="top-left">
        <LeafUpIcon />
      </span>
      <span className="top-right">
        <PaintBoardUpIcon />
      </span>
      <span className="bottom-right">
        <LeafDownIcon />
      </span>
      <span className="bottom-left">
        <PaintBoardDownIcon />
      </span>
    </div>
  );
};

export default LogosBackground;
