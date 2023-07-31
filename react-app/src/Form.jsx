import React, { useState } from 'react';
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email:''
  });

  const [errorCount, setErrorCount] = useState(0);
  const [usererror, setusererror] = useState(0);
  const [passworderror, setpassworderror] = useState(0);
  const [emailerror, setemailerror] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for form validation
    let newErrorCount = 0;
    let usernameerror= 0;
    let pasworderror= 0;
    let mailerror= 0;
    
    if (formData.username.trim() === '') {
      // newErrors.username = 'Please enter your username.';
      newErrorCount++;
      usernameerror++;

    }
    if (formData.password.trim() === '') {
      newErrorCount++;
      pasworderror++
    }
    if (formData.email.trim() === '') {
      newErrorCount++;
      mailerror++
    }

    toast.success("fields need to filled",{
      position: toast.POSITION.TOP_CENTER,
      autoclose: 3000,
      onClick:()=>{
        toast.info("second message",{
          position: toast.POSITION.TOP_CENTER,
          autoClose: false
        })
      }
    });
    
    

    setErrorCount(newErrorCount);
    setusererror(usernameerror);
    setpassworderror(pasworderror);
    setemailerror(mailerror);

    // if (newErrorCount === 0) {
    //   // Perform login or form submission here
    //   // For demonstration purposes, we'll just clear the form fields
    //   setFormData({
    //     username: '',
    //     password: '',
    //   });
    // }
  };

  return (
<div className='loginform'>
  <div className='color'>
  <h2 id='inlog1'>Login Form</h2>
      {errorCount > 0 && (
        <div style={{ border: '1px solid yellow', padding: '10px', marginBottom: '10px' }}>
          {errorCount} {errorCount === 1 ? 'error' : 'errors'} found in the form.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label className='login-user'>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '300px', height: '40px' }}
          />
          {usererror > 0 &&  (
        <div style={{ padding: '10px', marginBottom: '10px', color:"red" }}>
            Please enter the username
        </div>
      )}
        </div>
        <div>
          <label>Password:</label>
          <input className='distance3'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '300px', height: '40px' }}
          />
           {passworderror > 0 &&  (
        <div style={{ padding: '10px', marginBottom: '10px', color:"red" }}>
            Please enter the password
        </div>
      )}
          
        </div>
        <div>
          <label className='distance'>email:</label>
          <input className='distance2'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '300px', height: '40px', marginright:"-15px" }}
          />
           {emailerror > 0 &&  (
        <div style={{ padding: '10px', marginBottom: '10px', color:"red" ,marginleft:"10px" }}>
            Please enter the email
        </div>
      )}
        </div>
        <div>
          <button type="submit" className='submit'>Login</button>
        </div>
      </form>
  </div>
      
    </div>
  );
};

export default LoginForm;

