import React, { useState } from "react";
import Payment from "./Payment";

const Button = ({ styles }) => {
  const [showPayment, setShowPayment] = useState(false);

  const handleButtonClick = () => {
    setShowPayment(!showPayment);
  };

  const handleClosePayment = () => {
    setShowPayment(false);
  };

  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary gradient-sunset rounded-[10px] outline-none ${styles}`}
        onClick={handleButtonClick}
      >
        Get Started
      </button>
      {showPayment && <Payment handleClose={handleClosePayment} showPayment = {showPayment} />}
    </>
  );
};

export default Button;
