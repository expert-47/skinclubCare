import React from "react";

import "./index.css";
import { OnboardingImage } from "_images";
import { history } from "_utils/_helpers";
import {
  CustomFormWithImage,
  ButtonWithIcon,
  TextInputField,
} from "_components";

const ResetPassword = () => {
  const navigatetoLogin = () => {
    history.navigate("/login");
  };
  return (
    <CustomFormWithImage
      heading="Reset your password"
      description={
        <>
          <span>Create a new strong password, must be at least 8</span>
          {window.innerWidth <= 505 ? <> </> : <br />}
          <span>characters long</span>
        </>
      }
      image={OnboardingImage}
      className={"reset-password-parent"}
      sx={{ description: { color: "#4c4d4f" } }}
    >
      <form>
        <TextInputField
          type="password"
          placeholder="********"
          id={"new-password"}
          name={"new-password"}
          label={"new-password"}
          hasError={true}
          error={"Error message"}
        />
        <TextInputField
          type="password"
          placeholder="********"
          id={"confirm-password"}
          name={"confirm-password"}
          label={"confirm-password"}
          hasError={true}
          error={"Error message"}
        />
        <ButtonWithIcon
          type={"submit"}
          sx={{
            backgroundColor: "#000",
            text: { color: "#fff", textAlign: "center" },
          }}
          label={"Reset Password"}
        />
      </form>
      <div className="onboarding-note text-align-center">
        <span
          style={{ textDecorationLine: "underline", cursor: "pointer" }}
          onClick={navigatetoLogin}
        >
          {"Back to login"}
        </span>
      </div>
    </CustomFormWithImage>
  );
};

export default ResetPassword;
