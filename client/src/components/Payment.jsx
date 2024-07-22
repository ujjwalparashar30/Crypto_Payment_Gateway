import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Payment = ({ handleClose, showPayment }) => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);


  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
  let animation = "animation-fade-in"

  if(showPayment == true) animation = "animation-fade-in";
  else animation = "animation-fade-out" ;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className= {` relative p-8 bg-black-gradient rounded-lg w-full max-w-md mx-auto ${animation} `} >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
        <div className="flex flex-col justify-center items-center">
          <Input
            placeholder="Address To"
            name="addressTo"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={handleChange}
          />
          <Input
            placeholder="Keyword (Gif)"
            name="keyword"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Enter Message"
            name="message"
            type="text"
            handleChange={handleChange}
          />
          <div className="h-[1px] w-full gradient-gold my-2" />

          {false ? (
            <Loader />
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Send now
            </button>
          )}
          { !currentAccount && (<button
              type="button"
              onClick={connectWallet}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Connect to Wallet
            </button>)}
        </div>
      </div>
    </div>
  );
};

export default Payment;
