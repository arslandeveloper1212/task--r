import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';


const Profile = () => {

  // Get user profile data from local storage
  const data = localStorage.getItem('userprofiledata');
  
  // Check if data exists and parse it as JSON
  const myArr =  JSON.parse(data) 
  console.log(`Image Url:http://localhost:4000/${myArr.image}`)
  return (
    <div>
      <Nav />

      <div className='justify-content-end align-items-center mt-4 mx-5 d-flex'>
        <span className='px-2'>
          {myArr ? (
            <div style={{display:"flex"}}>
              <img style={{ width: "80px", height: "80px",borderRadius: "80px", backgroundPosition:"center" }} 
              src={`http://localhost:4000/${ myArr.image}`}
              alt="Profile" />
              <div className='d-flex flex-column mx-3'>
                <span>
                  <strong>User:</strong> {myArr.username}
                </span>
                <span>
                  <strong>Email:</strong> {myArr.email}
                </span>
                <Link className='text-white text-decoration-none' to="/logout">
                  <button className='btn btn-danger'>Logout</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className='flex-column d-flex'>
              <img style={{ width: "60px", height: "60px" }} src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt='Default Profile' />
              <span>No email available</span>
              <button className='btn btn-success'>
                <Link className='text-white text-decoration-none' to="/login">Login</Link>
              </button>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default Profile;
