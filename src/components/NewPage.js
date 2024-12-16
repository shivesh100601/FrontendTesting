// src/components/AuthForms.js
import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;


const NewPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [socialMediaAuthProvider, setSocialMediaAuthProvider] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/register`,
        { username, password }
      );
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed.');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `https://api-fast.kreaitor.ai/api/v1/auth/test/login`,
        { username, password }
      );
      localStorage.setItem('token', response.data.token);
      console.log('Login successful:', response.data);
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed.');
    }
  };

  const handleAuthMetadata = async () => {
    try {
      const response = await axios.get(
        `https://api-fast.kreaitor.ai/api/v1/blogs/folders/`,
      );
      console.log('Auth Metadata Response:', response.data);
      alert('Auth Metadata submitted successfully!');
    } catch (error) {
      console.error('Auth Metadata submission failed:', error);
      alert('Auth Metadata submission failed.');
    }
  };

  return (
    <div>
      <h2>Register or Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleRegister}>Register</button>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>

      <h2>Auth Metadata</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>Social Media Auth Provider:</label>
        <input
          type="text"
          value={socialMediaAuthProvider}
          onChange={(e) => setSocialMediaAuthProvider(e.target.value)}
        />
        <br />
        <label>Access Token:</label>
        <input
          type="text"
          value={accessToken}
          onChange={(e) => setAccessToken(e.target.value)}
        />
        <br />
        <label>Refresh Token:</label>
        <input
          type="text"
          value={refreshToken}
          onChange={(e) => setRefreshToken(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleAuthMetadata}>Submit Auth Metadata</button>
      </form>
    </div>
  );
};

export default NewPage;
