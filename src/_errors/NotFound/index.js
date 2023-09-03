import React from "react";

import "./index.css";
import { history } from "_utils/_helpers";
import { ButtonWithIcon } from "_components";
import LogosBackground from "_components/LogosBackground";

const NotFound = () => {
  const navigatetoRoot = () => {
    history.navigate("/");
  };

  return (
    <>
      <LogosBackground />
      <div className="error-box">
        <span className="error-code">404</span>
        <h1>Page Not Found</h1>
        <span className="error-description">
          We’re sorry, the page you requested could not be found
        </span>
        <ButtonWithIcon
          sx={{
            backgroundColor: "#000",
            marginTop: "2rem",
            cursor: "pointer",
            text: { color: "#fff", textAlign: "center" },
          }}
          onClick={navigatetoRoot}
          label={"Let’s Go Back To Home Page"}
        />
      </div>
    </>
  );
};

export default NotFound;
