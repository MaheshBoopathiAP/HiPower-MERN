import { useState } from 'react';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPasswordToken = async () => {
    // Your logic for sending a password reset token
    // ...

    // Example response:
    // if (response.success) {
    //   setMessage(response.message);
    // } else {
    //   setMessage(response.message);
    // }
  };

  const handleResetPassword = async () => {
    // Your logic for resetting the password
    // ...

    // Example response:
    // if (response.success) {
    //   setMessage(response.message);
    // } else {
    //   setMessage(response.message);
    // }
  };

  return (
      <div className="bg-white h-screen flex items-center justify-center">
      <div className="bg-white top-[20%] p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-red-500 mb-4 flex align-middle justify-center">Reset Password</h1>

        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded bg-white"
        />

        <button
          onClick={handleResetPasswordToken}
          className="bg-black text-white p-2 rounded w-full mb-4"
        >
          Send Reset Token
        </button>

        {message && <p className="text-red-500 mb-4">{message}</p>}

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded bg-white"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded bg-white"
        />

        <input
          type="text"
          placeholder="Enter Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full p-2 mb-4 border rounded bg-white"/>

        <button
          onClick={handleResetPassword}
          className="bg-red-500 text-white p-2 rounded w-full"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
