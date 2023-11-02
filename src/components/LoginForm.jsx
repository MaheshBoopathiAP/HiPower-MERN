import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import 'react-phone-input-2/lib/style.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
      <Navbar />
      <div className='ecomm-popup bg-white pt-10 h-[80%] z-20 w-full flex justify-center items-center'>
      
          <div className='w-[500px] h-[450px] bg-white duration-300 ease-in relative flex flex-col p-5'>
            <CloseIcon
              className='absolute top-5 right-5 cursor-pointer'
            />
            <div className='w-full h-[50px] text-center  '>
              <h1 className='text-2xl font-bold text-black pr-20'>Login</h1>
            </div>
            <div className='w-full text-center text-gray-500 mb-5 text-sm tracking-tight pr-20'>
              <p>Enter your email and password to log in.</p>
            </div>
            <form onSubmit={""} className='flex flex-col mt-5 gap-5 ml-5'>
              <div className='w-full flex flex-col text-gray-500'>
                <label htmlFor='email' className='mb-2 text-sm text-black'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // placeholder='Email Address'
                  name='email'
                  required
                  className='focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2'
                />
              </div>
              <div className='w-full flex flex-col text-gray-500'>
                <label htmlFor='password' className='mb-2 text-sm text-black'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // placeholder='Password'
                  name='password'
                  required
                  className='focus:outline-[#ff0e2c] text-sm border border-gray-300 bg-white w-[70%] font-Urbanist px-3 p-2'
                />
              </div>
              <div className='pr-20 mr-20 ml-8'>
                <button
                  type='submit'
                  className='bg-red-500 text-center w-full  text-white font-Poppins'
                >
                  Login
                </button>
              </div>
            </form>
            <p className='text-sm mt-2 w-full text-center text-black pr-20 mr-2'>
              Don't have an account?{' '}
              <Link to="/register">
              <span
                className='text-[#ff0e2c] cursor-pointer ml-1'
                
              >
                Sign Up
              </span>
              </Link>
            </p>
          </div>
        
      </div>
    </>
  );
};

export default LoginForm;
