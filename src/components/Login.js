// src/components/Login.js
import React from 'react';
// import TelegramLogin from './TelegramLogin';
import axios from 'axios';
const Login = () => {
  const handleLogin = async () => {
    // Redirect to the FastAPI login route to start the OAuth flow
    const redirectUrl = `${process.env.REACT_APP_API_BASE_URL}/v1/auth/google-login`;
    // getRequest with fetch  to redirectUrl

    try {
    const response = await axios.get(redirectUrl);
    

    console.log(response.data);
    localStorage.setItem('token', response);
    
    window.location.href = response.data;
    // Redirect or update UI as needed
  } catch (error) {
    console.error('Authentication failed:', error);
    alert('Authentication failed');
  }
  };

  return (
    <>
    <button onClick={handleLogin}>Login with Google</button>
    {/* <TelegramLogin /> */}
    </>
  );
};

export default Login;
