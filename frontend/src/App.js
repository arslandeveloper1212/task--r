import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";

import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Products from "./components/pages/Products";

import Profile from "./components/pages/Profile";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}

        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="*" element={<Navigate to="/login" replace />} />
        
        <Route
          path="/"
          element={<ProtectedRoute element={<Home />} />}
        />

       
      </Routes>
    </div>
  );
}

export default App;
