import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [searchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState("");

  const fetchUserInfo = async (code) => {
    if (!code) {
      setError("No authorization code found!");
      alert(error)
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/auth/google-callback?code=${code}`
      );

      console.log(response.data);
      setUserInfo(response.data);
    } catch (error) {
      console.error("Error fetching user info:", error);
      setError("Failed to retrieve user information.");
    }
  };

  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      fetchUserInfo(code);
    }
  }, [searchParams]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Google Authentication Callback</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userInfo ? (
        <div>
          <h2>Welcome, {userInfo.name}</h2>
          <p>Email: {userInfo.email}</p>
          <img
            src={userInfo.picture}
            alt="Profile"
            style={{ borderRadius: "50%" }}
          />
        </div>
      ) : (
        !error && <p>Loading user information...</p>
      )}
    </div>
  );
}

export default Dashboard;
