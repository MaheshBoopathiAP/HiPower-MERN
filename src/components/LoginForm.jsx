import  { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import OtpInput from 'otp-input-react';
import 'react-phone-input-2/lib/style.css';

const LoginForm = ({ handleLogin, handleOtpVerification }) => {
  const [number, setNumber] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState('');

  return (
    <div className='ecomm-popup bg-white pt-20 h-[80%] z-20 w-full flex justify-center items-center'>
      {!showOtp ? (
        <div className='w-[400px] h-[450px] bg-white duration-300 ease-in relative flex flex-col p-5'>
          <CloseIcon
            className='absolute top-5 right-5 cursor-pointer'
            onClick={() => setShowOtp(false)}
          />
          <div className='w-full h-[50px] text-center border-b-2'>
            <h1 className='text-2xl font-bold text-red-500'>Login</h1>
          </div>
          <div className='w-full text-center text-gray-500 my-5 text-sm tracking-tight'>
            <p>Enter your email and password to log in.</p>
          </div>
          <form onSubmit={handleLogin} className='flex flex-col mt-5 gap-5'>
            <div className='w-full flex items-center justify-center text-gray-500'>
              <input
                type='email'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder='Email Address'
                name='email'
                required
                className='focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2'
              />
            </div>
            <div className='w-full flex items-center justify-center text-gray-500'>
              <input
                type='password'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder='Password'
                name='password'
                required
                className='focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2'
              />
            </div>
            <div className='px-9'>
              <button
                type='submit'
                className='bg-red-500 text-center w-full p-2 text-white font-Poppins'
              >
                Login
              </button>
            </div>
          </form>
          <p className='text-sm absolute bottom-24 w-full text-center text-black'>
              Don't have an account?{' '}
          <span
            className='text-[#ff0e2c] cursor-pointer ml-1'
            onClick={() => setShowOtp(true)}
          >
            Sign Up
          </span>
        </p>

        </div>
      ) : (
        <div className='w-[400px] h-[350px] bg-gradient-to-tr from-pink-500 via-red-500 to-[#ff0e2c] duration-300 ease-in relative flex flex-col items-center justify-center gap-5 p-5'>
          <div>
            <p className='font-semibold text-white'>Enter your OTP</p>
          </div>
          <div className='flex justify-between'>
            <OtpInput
              value={otp}
              onChange={setOtp}
              OTPLength={6}
              otpType='number'
              disabled={false}
              autoFocus
            />
          </div>
          <div className='w-full flex items-center justify-center'>
            <button
              onClick={handleOtpVerification}
              className='text-white py-2 px-3 text-sm flex gap-2 justify-center items-center bg-emerald-500'
            >
              Verify the OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
