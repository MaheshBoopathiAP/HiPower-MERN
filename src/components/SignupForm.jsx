import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import BadgeIcon from '@mui/icons-material/Badge';
import Navbar from './Navbar';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: '',
    contactNumber: '',
    otp: '',
  });

  const { firstName, lastName, email, password, confirmPassword, accountType, contactNumber, otp } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetOTP = async (e) => {
    e.preventDefault();
    // Implement OTP request logic here, send a request to your server to generate and send OTP to the user's email or phone.
    // The server should send a real OTP to the user.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement user registration logic here
    // You can make an API call to your server for user registration

    // Simulated success message
    alert('User registered successfully!');
  };

  return (
    <>
    <Navbar/>
    <div className="ecomm-popup h-full bg-white top-0 z-20 w-full flex justify-center items-center">
      <div className="w-[400px] h-[100vh] mb-[10%] bg-white duration-300 ease-in relative flex flex-col p-5">
        <CloseIcon className="absolute top-5 right-5 cursor-pointer" />
        <div className="w-full h-[50px] text-center">
          <h1 className="text-3xl font-bold text-red-500 ">Sign in to Your Account</h1>
        </div>
        <form className="flex flex-col gap-5 justify-center mt-10" onSubmit={handleSubmit}>
          <div className="w-full flex items-center gap-5 justify-center">
            <BadgeIcon />
            <input
              type="text"
              onChange={handleChange}
              name="firstName"
              value={firstName}
              placeholder="First Name"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 mr-10 text-black"
            />
          </div>
          <div className="w-full flex items-center gap-5 justify-center">
            <BadgeIcon />
            <input
              type="text"
              onChange={handleChange}
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 mr-10 text-black"
            />
          </div>
          <div className="w-full flex items-center gap-5 justify-center">
            <BadgeIcon />
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
              placeholder="Email Address"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 mr-10 text-black"
            />
          </div>
          <div className="w-full flex items-center gap-5 justify-center">
            <BadgeIcon />
            <input
              type="password"
              onChange={handleChange}
              name="password"
              value={password}
              placeholder="Password"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 mr-10 text-black"
            />
          </div>
          <div className="w-full flex items-center gap-5 justify-center">
            <BadgeIcon />
            <input
              type="password"
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 mr-10 text-black"
            />
          </div>
          <div className="w-full flex items-center gap-5 justify-center">
            <BadgeIcon />
            <input
              type="text"
              onChange={handleChange}
              name="accountType"
              value={accountType}
              placeholder="Account Type"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 mr-10 text-black"
            />
          </div>
          <div className="w-full flex items-center gap-5 justify-center">
            <BadgeIcon />
            <input
              type="text"
              onChange={handleChange}
              name="contactNumber"
              value={contactNumber}
              placeholder="Contact Number"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 mr-10 text-black"
            />
            <button
              onClick={handleGetOTP}
              className="text-center w-[30%] p-2 bg-blue-500 text-white font-Poppins"
            >
              Get OTP
            </button>
          </div>
          {/* <div className="flex items-center justify-center mt-3">
            <button
              onClick={handleGetOTP}
              className="text-center w-[40%] p-2 bg-blue-500 text-white font-Poppins"
            >
              Get OTP
            </button>
          </div> */}
          <div className="w-full flex items-center gap-5 justify-center">
            <input
              type="text"
              onChange={handleChange}
              name="otp"
              value={otp}
              placeholder="OTP"
              required
              className="focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2 mr-10 text-black"
            />
          </div>
          
          <div className="px-9">
            <button type="submit" className="text-center w-full p-2 bg-red-500 mt-3 text-white font-Poppins">
              Sign Up
            </button>
          </div>
          <div className="w-full flex items-center gap-5 justify-center text-black">
            <div className="mx-auto text-black">
              Already a member?<span className='text-red-500 font-bold'> Login</span>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignupForm;
