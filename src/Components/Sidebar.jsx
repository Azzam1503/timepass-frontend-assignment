import React from 'react'
import sidebarImage from "../assets/bg-sidebar-desktop.svg";

const Sidebar = ({sidebarData, step}) => {
  return (
    <div className="sidebar">
        <img className="sidebar-img" src={sidebarImage} alt="" />
        {/* <img src={mobileImage} className="mobile-img" alt="" /> */}
        <div className="steps">
          {sidebarData.map((item) => (
            <div key={item.step} className="step">
              <div
                className={`step-circle ${step === item.step ? "active-circle" : ""}`}
              >
                {item.step}
              </div>
             <div>
              <div className="step-number">Step {item.step}</div>
             <div className="step-title">{item.title}</div>
             </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Sidebar
