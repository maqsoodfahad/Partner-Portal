import React from "react";
import logo from "./../../assets/HomeAssets/assets/images/logo.png";
const PasswordReset = () => {
  return (
    <>
      <div className="onboarding-wrap bg_dark PasswordReset_main">
        <div className="PasswordReset_main">
          <div className="PasswordReset">
            <div className="login-logo mb-32 mx-auto text-center">
              <img src={logo} />
            </div>
            <h1 className="f36 text-center">Password reset</h1>
            <p className="f20 text_lit mt-32"> Dear John,</p>
            <p className="f20 text_lit mt-8 ">
              We recently received a request to reset the password for your
              Lion's Pride Games account linked to gambler@winbig.com. Please
              note that your account remains unchanged at this time.
            </p>
            <p className="f20 text_lit mt-8 ">
              To proceed with the password reset, kindly click on the following
              link:
            </p>
            <div className="btn_passs mt-32 mb-32 text-center ">
              <button type="button" className="themebtn-blue  w368 mx-auto">
                Reset your password
              </button>
            </div>
            <p className="f20 text_lit  "> 
              In the event that this request was not initiated by you, we urge
              you to inform us as soon as possible by replying to this email.
            </p>
            <p className="f20 text_lit  mt-8"> 
              For any further queries or assistance, please feel free to reach
              out to us at support@lionspridegames.com. We are committed to
              assisting you at every step.
            </p>
            <p className="f20 text_lit  mt-8"> Best regards,</p>
            <p className="f20 text_lit  mt-64"> The Lion's Pride Games Team</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PasswordReset;