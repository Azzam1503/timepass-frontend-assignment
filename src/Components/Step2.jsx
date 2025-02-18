import React from "react";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";
import arcade from "../assets/icon-arcade.svg";

const Step2 = ({
  billing,
  setBilling,
  setActivePlan,
  acitvePlan,
  acitvePlanError,
  setActivePlanError,
}) => {
  return (
    <div>
      <div>
        <h1 className="title">Select Your Plan</h1>
        <p className="text">
          You have the option of monthly and yearly billing.
        </p>
      </div>

      <div className="plan-container">
        <div
          className={`plan-box ${acitvePlan === "Arcade" ? "active-plan" : ""}`}
          onClick={() => {
            setActivePlanError("");
            setActivePlan("Arcade");
          }}
        >
          <img className="plan-img" src={arcade} alt="" />
          <div>
            <h3>Arcade</h3>
            <span>${billing === "monthly" ? 9 : 90}/month</span>
          </div>
        </div>
        <div
          className={`plan-box ${
            acitvePlan === "Advanced" ? "active-plan" : ""
          }`}
          onClick={() => {
            setActivePlanError("");
            setActivePlan("Advanced");
          }}
        >
          <img className="plan-img" src={advanced} alt="" />
          <div>
            <h3>Advanced</h3>
            <span>${billing === "monthly" ? 12 : 120}/month</span>
          </div>
        </div>
        <div
          className={`plan-box ${acitvePlan === "Pro" ? "active-plan" : ""}`}
          onClick={() => {
            setActivePlanError("");
            setActivePlan("Pro");
          }}
        >
          <img className="plan-img" src={pro} alt="" />
          <div>
            <h3>pro</h3>
            <span>${billing === "monthly" ? 15 : 150}/month</span>
          </div>
        </div>
      </div>
      {acitvePlanError && <p className="error-text">{acitvePlanError}</p>}
      <div className="billing-toggle">
        <span>Monthly</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={billing === "yearly"}
            onChange={() =>
              setBilling(billing === "monthly" ? "yearly" : "monthly")
            }
          />
          <span className="slider"></span>
        </label>
        <span>Yearly</span>
      </div>
    </div>
  );
};

export default Step2;
