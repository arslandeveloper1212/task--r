import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from "./Nav";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the /logout endpoint on the server (which doesn't perform server-side logout)
      
  
      // Clear localStorage on the client side
      localStorage.clear();
  
      // Redirect to the login page
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  
  

  // Call handleLogout when the component mounts
  useEffect(() => {
    handleLogout();
  }, []);

  // Redirect to the login page after logout
  return (
    <div>
    <Nav />
      <Navigate to="/login" />;
    </div>
  );
};

export default Logout;
