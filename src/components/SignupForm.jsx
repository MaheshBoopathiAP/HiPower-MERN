import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import BadgeIcon from '@mui/icons-material/Badge';
import Footer from './Footer';

const SignupForm = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [num, setNum] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
   
    <div className="ecomm-popup bg-white top-0 z-20 w-full h-[75vh] flex justify-center items-center">
      <div className="w-[400px] h-[500px] bg-white duration-300 ease-in relative flex flex-col p-5">
        <CloseIcon className="absolute top-5 right-5 cursor-pointer" />
        <div className="w-full h-[50px] text-center ">
          <h1 className="text-3xl font-bold text-red-500 ">Sign in to Your Account</h1>
        </div>
        <form className="flex flex-col gap-5 justify-center mt-10" onSubmit={handleSubmit}>
          <div className="w-full flex items-center gap-5 justify-center ">
            <BadgeIcon />
            <input
              type="text"
              onChange={(e) => setFname(e.target.value)}
              placeholder="First Name"
              name="fname"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 justify-center mr-10"
            />
          </div>
          <div className="w-full flex items-center gap-5 justify-center">
            <BadgeIcon />
            <input
              type="text"
              onChange={(e) => setLname(e.target.value)}
              placeholder="Last Name"
              name="lname"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 mr-10"
            />
          </div>
          <div className="w-full flex items-center gap-5 justify-center">
            <BadgeIcon />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              name="email"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 mr-10"
            />
          </div>
          <div className="w-full flex items-center gap-5 justify-center">
            <BadgeIcon />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              name="password"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 mr-10"
            />
          </div>
          {/* <div className="w-full flex items-center gap-5 justify-center">
            <div className="mx-auto">Phone Input</div>
          </div> */}
          <div className="px-9">
            <button type="submit" className="text-center w-full p-2 bg-red-500 mt-10 text-white font-Poppins">
              Create Account
            </button>
          </div>
          <div className="w-full flex items-center gap-5 justify-center">
            <div className="mx-auto text-black">Already a member?<span className='text-red-500 font-bold'> Login</span></div>
          </div>
        </form>
      </div>
    </div>
  
    
  );
};

export default SignupForm;
