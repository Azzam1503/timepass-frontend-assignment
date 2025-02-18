import React, { useEffect, useState } from "react";

const Step4 = ({acitvePlan, billing, addons, setStep}) => {
  const [total, setTotal] = useState(0);
  const [planPrice, setPlanPrice] = useState(0);

  const calculateTotal = () => {
      let amount = 0;
      if (acitvePlan === "Arcade") amount += billing === "monthly" ? 9 : 90;
      if (acitvePlan === "Advanced") amount += billing === "monthly" ? 12 : 120;
      if (acitvePlan === "Pro") amount += billing === "monthly" ? 15 : 150;
  
      addons.forEach((addon) => {
        if (addon === "Online service") amount += billing === "monthly" ? 1 : 10;
        if (addon === "Larger storage") amount += billing === "monthly" ? 2 : 20;
        if (addon === "Customizable profile") amount += billing === "monthly" ? 2 : 20;
      });
  
      setTotal(amount);
    };

    const handlePlanPrice = () => {
      let amount = 0;
      if(acitvePlan === "Arcade"){
        amount = 9;
      }else if(acitvePlan === "Advance"){
        amount = 12;
      }else{
        amount = 15;
      };

      setPlanPrice(billing === "monthly" ? amount : amount * 10);
    }

    useEffect(() => {
      calculateTotal();
      handlePlanPrice();
    },[]);

  return (
    <div className="finish-container">
      <h1 className="title">Finishing Up</h1>
      <p className="subtitle">
        Double check everything looks OK before confirming
      </p>

      <div className="total-bg">
        <div className="total">
          <div className="plan-total">
            <div>
              <h4>
                {acitvePlan}({billing === "monthly" ? "Monthly" : "Yearly"})
              </h4>
              <p className="change" onClick={() => setStep(2)}>
                Change
              </p>
            </div>
            <span>${planPrice}/{billing === "monthly" ? "mo" : "yr"}</span>
          </div>
          <hr className="finish-line" />
          <div className="service-container">
            {addons.map((item, index) => (
              <div key={index} className="service-total">
                <p>{item}</p>
                <span>
                  $
                  {item === "Online service"
                    ? billing === "monthly"
                      ? 1
                      : 10
                    : billing === "monthly"
                    ? 2
                    : 20}
                  /{billing === "monthly" ? "mo" : "yr"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="total-amount">
        <p>Total (per {billing === "monthly" ? "month" : "year"})</p>
        <h3>${total}/{billing === "monthly" ? "mo" : "yr"}</h3>
      </div>
    </div>
  );
};

export default Step4;
