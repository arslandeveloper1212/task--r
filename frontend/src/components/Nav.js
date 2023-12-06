import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  
  return (
    
    <div className="NavCss">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      {localStorage.getItem("userprofiledata")  ? (
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      ) : (
        <div className="d-flex">
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      )}
    </div>
  );
};

export default Nav;
