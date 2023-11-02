import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import BadgeIcon from '@mui/icons-material/Badge';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: '',
    
  });

  const { firstName, lastName, email, password, confirmPassword, accountType } = formData;

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
      <Navbar />
      <div className="ecomm-popup h-full bg-white top-0 z-20 w-full flex justify-center items-center">
        <div className="w-[500px] h-[100vh] mb-[10%] bg-white duration-300 ease-in relative flex flex-col p-5">
          <CloseIcon className="absolute top-5 right-5 cursor-pointer" />
          <div className="w-full h-[50px]">
            <h1 className="text-3xl font-bold text-black ">Sign in to Your Account</h1>
          </div>
          <form className="flex flex-col gap-5 justify-center mt-10 pl-2" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="firstName" className="text-black">First Name</label>
              <input
                type="text"
                onChange={handleChange}
                name="firstName"
                value={firstName}
                required
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2 text-black"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="lastName" className="text-black">Last Name</label>
              <input
                type="text"
                onChange={handleChange}
                name="lastName"
                value={lastName}
                required
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2 text-black"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email" className="text-black">Email Address</label>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                value={email}
                required
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2 text-black"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="password" className="text-black">Password</label>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
                required
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2 text-black"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-black">Confirm Password</label>
              <input
                type="password"
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
                required
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2 text-black"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="accountType" className="text-black">Account Type</label>
              <input
                type="text"
                onChange={handleChange}
                name="accountType"
                value={accountType}
                required
                className="focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2 text-black"
              />
            </div>

            <div className="pl-5 pr-40">
              <Link to="/otp">
              <button type="submit" className="text-center w-full p-2 bg-red-500 mt-3 text-white font-Poppins" >
                Sign Up
              </button>
              </Link>
            </div>
            <div className="w-full flex items-center gap-5 justify-center text-black">
              <div className="mr-auto pl-20 text-black">
                Already a member?<Link to="/login"><span className='text-red-500 font-bold'> Login</span></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
