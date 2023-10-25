import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { toast } from 'react-toastify';

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    // Create a request body with the signupData
    const requestBody = {
      username: signupData.username,
      email: signupData.email,
      password: signupData.password,
    };

    // Make a POST request to your API
    const result = await apiClient
      .post('/auth/register', requestBody)
    if (!result.ok) return toast.error("Signup failed")
    // Handle a successful response, e.g., show a success message
    setShowAlert(true);
    setSignupData({
      username: '',
      email: '',
      password: '',
    });
    console.log(result.data);
    //  toast.success('Signup successful');
    localStorage.setItem("simpleUser", JSON.stringify(result.data?.data));
    navigate("/");
    window.location.reload();

  };

  return (
    <div className="container">

      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5 mb-3 w-20">
          <div style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)', borderRadius: '2rem' , padding: '2rem 2rem' }}>
            <h2>Signup</h2>
            {showAlert && (
              <div className="alert alert-success" role="alert">
                Signup successful!
              </div>
            )}
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={signupData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  required
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={signupData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={signupData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <p>Already have an account? <a href="/login">Login</a></p>
              <button type="button" className="btn btn-primary newb1" onClick={handleSignup}>
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignupForm;