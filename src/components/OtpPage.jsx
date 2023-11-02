import React, { useState } from 'react';
import OtpInput from 'otp-input-react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import Navbar from './Navbar';

const OTPPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showMobileInput, setShowMobileInput] = useState(true);

  const handleMobileNumberChange = (value) => {
    setMobileNumber(value);
  };

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleContinueToOTP = () => {
    if (mobileNumber) {
      setShowMobileInput(false);
    } else {
      alert('Please enter a valid mobile number');
    }
  };

  const handleOTPVerification = () => {
    if (otp === '123456') {
      alert('OTP Verified successfully');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="ecomm-page bg-white w-full flex items-center justify-center ">
      <div className="ecomm-content my-10">
        {showMobileInput ? (
          <div className=''>
          <h1 className='text-3xl font-bold font-Poppins text-red-500 tracking-wide mb-3 ml-5'>OTP Verification</h1>
          <p className='text-sm font-Poppins text-gray-600 mb-20 ml-10'>We believe in customer security</p>
            <p className="font-semibold text-black my-3 ">Enter your mobile number</p>
            <div className="w-full flex items-center gap-10 justify-center">
              <PhoneInput country={'in'} value={mobileNumber} onChange={handleMobileNumberChange} className=" text-black" />
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                onClick={handleContinueToOTP}
                className="text-white py-2 px-3 text-sm flex gap-2 justify-center items-center my-10 bg-emerald-500"
              >
                Continue
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className='text-3xl font-bold font-Poppins text-red-500 tracking-wide mb-3 ml-5'>OTP Verification</h1>
          <p className='text-sm font-Poppins text-gray-600 mb-20 ml-10'>We believe in customer security</p>
            <p className="font-semibold text-white">Enter your OTP</p>
            <div className="flex justify-between">
              <OtpInput
                value={otp}
                onChange={handleOtpChange}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                onClick={handleOTPVerification}
                className="text-white py-2 px-3 text-sm flex gap-2 justify-center items-center bg-emerald-500 mt-10"
              >
                Verify the OTP
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default OTPPage;
