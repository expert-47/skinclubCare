import React, { useEffect } from "react";

import "./index.css";
import { LoginImage } from "_images";
import { history, newUUID } from "_utils/_helpers";
import { FacebookLogo, GoogleLogo, TwitterLogo } from "_utils/_icons";
import {
  CustomFormWithImage,
  DividerWithText,
  ButtonWithIcon,
  TextInputField,
  CheckboxInputField,
} from "_components";

const LoginForm = () => {
  const navigatetoSignUp = () => {
    history.navigate("/signup");
  };

  const navigatetoForgotPassword = () => {
    history.navigate("/forgot-password");
  };

  useEffect(() => {
    if (localStorage.getItem("token") === "verified") {
      history.navigate("/");
    }
  }, []);

  return (
    <CustomFormWithImage
      heading="Welcome to Skin Club"
      description="Don’t have an account? "
      descriptionLinkText="Sign up"
      onDescriptionLinkClick={navigatetoSignUp}
      image={LoginImage}
      sx={{ description: { color: "#4c4d4f80" } }}
    >
      <form>
        <TextInputField
          type="email"
          placeholder="jane@gmail.com"
          id={"email"}
          name={"email"}
          label={"email"}
          hasError={true}
          error={"Error message"}
        />
        <TextInputField
          type="password"
          placeholder="********"
          id={"password"}
          name={"password"}
          label={"password"}
          hasError={true}
          error={"Error message"}
        />
        <div className="onboarding-note text-align-end" style={{ margin: 0 }}>
          <span
            style={{ cursor: "pointer" }}
            onClick={navigatetoForgotPassword}
          >
            {"Forgot your password"}
          </span>
        </div>
        <CheckboxInputField
          type="checkbox"
          id={"subscribe"}
          name={"subscribe"}
          label={"Remember me"}
        />
        <ButtonWithIcon
          type={"submit"}
          sx={{
            backgroundColor: "#000",
            text: { color: "#fff", textAlign: "center" },
          }}
          onClick={() => {
            localStorage.setItem("token", "verified");
          }}
          label={"Log in"}
        />
        <div
          className="onboarding-note text-align-center"
          style={{ marginBottom: "1rem" }}
        >
          <span>{"Don’t have an account? "}</span>
          <span className="link" onClick={navigatetoSignUp}>
            {"Sign up"}
          </span>
        </div>
      </form>
      <DividerWithText text={"Or"} />
      <div className="multi-auth">
        {[
          { icon: <FacebookLogo />, title: "Facebook" },
          { icon: <GoogleLogo />, title: "Google" },
          { icon: <TwitterLogo />, title: "Twitter" },
        ].map(({ icon, title }) => (
          <ButtonWithIcon
            key={newUUID()}
            icon={icon}
            label={"Continue with " + title}
          />
        ))}
      </div>
    </CustomFormWithImage>
  );
};

export default LoginForm;
