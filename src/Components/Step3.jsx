import React from "react";

const Step3 = ({ addons, handleAddonChange }) => {
  return (
    <div>
      <div>
        <h1 className="title">Pick add-ons</h1>
        <p className="text">Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="addons-container">
        <label className="addon">
          <input
            type="checkbox"
            checked={addons.includes("Online service")}
            onChange={() => handleAddonChange("Online service")}
          />
          <div className="addon-content">
            <div>
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
            <span className="addon-price">+ $1/mo</span>
          </div>
        </label>

        <label className="addon">
          <input
            type="checkbox"
            checked={addons.includes("Larger storage")}
            onChange={() => handleAddonChange("Larger storage")}
          />
          <div className="addon-content">
            <div>
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
            <span className="addon-price">+ $2/mo</span>
          </div>
        </label>

        <label className="addon">
          <input
            type="checkbox"
            checked={addons.includes("Customizable profile")}
            onChange={() => handleAddonChange("Customizable profile")}
          />
          <div className="addon-content">
            <div>
              <h3>Customizable profile</h3>
              <p>Custom theme on your profile</p>
            </div>
            <span className="addon-price">+ $2/mo</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Step3;
