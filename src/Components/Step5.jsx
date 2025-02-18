import React from "react";
import thankyou from "../assets/icon-thank-you.svg";

const Step5 = () => {
  return (
    <div>
      <div className="confirmation-container">
        <img src={thankyou} alt="" />
        <h1>Thank you</h1>
        <div>
          <p>Thanks for confirming your subscription! We hope you</p>
          <p>have fun using our platform. If you ever need support,</p>
          <p>feel free to email us at support@loremgaming.com.</p>
        </div>
      </div>
    </div>
  );
};

export default Step5;
