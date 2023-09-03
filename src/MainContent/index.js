import React, { useEffect, useRef } from "react";

import "./index.css";
import { setElementHeightBetweenTwoElements } from "_utils/_helpers";

function MainContent({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    setElementHeightBetweenTwoElements({ elementRef });

    window.addEventListener("resize", () =>
      setElementHeightBetweenTwoElements({ elementRef })
    );

    return () => {
      window.removeEventListener("resize", () =>
        setElementHeightBetweenTwoElements({ elementRef })
      );
    };
  }, [elementRef.current]);

  return (
    <div ref={elementRef} className="main-content">
      {children}
    </div>
  );
}

export default MainContent;
