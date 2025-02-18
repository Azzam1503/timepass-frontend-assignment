import { useState } from "react";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Step4 from "./Components/Step4";
import Step5 from "./Components/Step5";
import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [acitvePlan, setActivePlan] = useState("");
  const [acitvePlanError, setActivePlanError] = useState("");

  const [billing, setBilling] = useState("monthly");

  const [addons, setAddons] = useState([]);

  const sidebarData = [
    { title: "Your Info", step: 1 },
    { title: "Select Plan", step: 2 },
    { title: "Add-Ons", step: 3 },
    { title: "Summary", step: 4 },
  ];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(String(phone));
  };

  const handleNext = () => {
    if (step === 1) {
      let valid = true;
      if (name.trim() === "") {
        setNameError("Name is required");
        valid = false;
      } else {
        setNameError("");
      }
      if (!validateEmail(email)) {
        setEmailError("Invalid email address");
        valid = false;
      } else {
        setEmailError("");
      }
      if (!validatePhone(phone)) {
        setPhoneError("Invalid phone number");
        valid = false;
      } else {
        setPhoneError("");
      }
      if (!valid) return;
    } else if (step === 2) {
      if(acitvePlan === ""){
        setActivePlanError("Please select a plan");
        return;
      }
    }
    setStep((prev) => prev+1);

  }

  const handlePrev = () => {
    if(step == 1) return;
    setStep(step-1);
  }

  const handleAddonChange = (addon) => {
    setAddons((prevAddons) =>
      prevAddons.includes(addon)
        ? prevAddons.filter((item) => item !== addon)
        : [...prevAddons, addon]
    );
  };

  
  return (
    <div className="main">
      
      <Sidebar sidebarData={sidebarData} step={step} />

      <div className="container">
        {step === 1 && <Step1 name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} phoneError={phoneError} setPhoneError={setPhoneError} nameError={nameError} setNameError={setNameError} emailError={emailError} setEmailError={setEmailError} />}

        {step === 2 && <Step2 acitvePlan={acitvePlan} setActivePlan={setActivePlan} acitvePlanError={acitvePlanError} setActivePlanError={setActivePlanError} billing={billing} setBilling={setBilling} />}

        {step === 3 && <Step3 addons={addons} handleAddonChange={handleAddonChange} />}

        {step === 4 && <Step4  acitvePlan={acitvePlan} billing={billing} addons={addons} setStep={setStep} />}

        {step === 5 && <Step5 />}

       {step !== 5 && <div className="btn">
          <p className="back-btn" onClick={handlePrev}>{step === 1 ? "" : "Go back"}</p>
          <button className="next-btn" onClick={handleNext}>{step === 4 ? "Confirm": "Next Step"}</button>
        </div>}
      </div>
    </div>
  );

}

export default App;
