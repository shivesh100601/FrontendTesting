// src/components/TelegramLogin.js
import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import axios from 'axios';

const TelegramLogin = () => {
    const dummyApiCall = async () => {
      console.log('Dummy API call triggered');

    }
  const handleTelegramResponse = async (user) => {
    try {
        dummyApiCall();
      // Send the Telegram auth data to the FastAPI backend for validation
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/v1/auth/telegram`, {
        auth_data: user,
      });
      
      // Store the bearer token in local storage or state
      const token = response.data.token;
      console.log(token);
      localStorage.setItem('token', token);
      
      alert('Logged in successfully');
      // Redirect or update UI as needed
    } catch (error) {
      console.error('Authentication failed:', error);
      alert('Authentication failed');
    }
  };

  return (
    <TelegramLoginButton
      botName="Proxyv1bot"  // Replace with your bot's username (without @)
      dataOnauth={handleTelegramResponse}
    />
  );
};

export default TelegramLogin;
