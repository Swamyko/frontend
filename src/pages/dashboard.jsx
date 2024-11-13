// dashboard.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch user details from local storage
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    } else {
      // If no user details are found, redirect to login page
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear user details and tokens from local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userDetails');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {userDetails ? (
        <div>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>Role: {userDetails.role}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
