import React from "react";

const Step1 = ({
  name,
  setName,
  nameError,
  setNameError,
  email,
  setEmail,
  setEmailError,
  emailError,
  phone,
  setPhone,
  phoneError,
  setPhoneError,
}) => {
  return (
    <div className="personal-info">
      <div>
        <h1 className="title">Personal Info</h1>
        <p className="text">
          Please provide your name, email and phone number.
        </p>
      </div>
      <form className="form">
        <div className="info-div">
          <label htmlFor="">Name</label>
          <br />
          <input
            className={`info-input ${nameError ? "error" : ""}`}
            type="text"
            value={name}
            onChange={(e) => {
              setNameError("");
              setName(e.target.value);
            }}
            placeholder="e.g. Stephen King"
          />
          {nameError && <p className="error-text">{nameError}</p>}
        </div>
        <div className="info-div">
          <label htmlFor="">Email Address</label>
          <br />
          <input
            className={`info-input ${emailError ? "error" : ""}`}
            type="text"
            value={email}
            onChange={(e) => {
              setEmailError("");
              setEmail(e.target.value);
            }}
            placeholder="e.g. stephenking@lorem.com"
          />
          {emailError && <p className="error-text">{emailError}</p>}
        </div>
        <div className="info-div">
          <label htmlFor="">Phone number</label>
          <br />
          <input
            className={`info-input ${phoneError ? "error" : ""}`}
            type="text"
            value={phone}
            onChange={(e) => {
              setPhoneError("");
              setPhone(e.target.value);
            }}
            placeholder="e.g. +1 234 567 890"
          />
          {phoneError && <p className="error-text">{phoneError}</p>}
        </div>
      </form>
    </div>
  );
};

export default Step1;
