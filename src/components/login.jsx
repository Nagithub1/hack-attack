import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import video from "../assests/hacking_bgr.mp4";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

//   const router = Router();
const navigate = useNavigate();

  useEffect(() => {
    // Create a function to handle the form submission
    const handleSubmit = async (event) => {
      event.preventDefault();

      // Validate login credentials
      if (!username || !password) {
        setErrorMessage("Please enter a username and password.");
        return;
      }

      // Create an object with the username and password values
      const data = {
        username: username,
        password: password,
      };

      try {
        // Make a POST request to the backend API endpoint
        const response = await axios.post(`${BASE_URL}/hackattack/login`, data);
        if(response.status === 200 || response.status === 201 ){
          navigate('/dashboard');
        }

        if(response.status === 400){
            setErrorMessage(response.data.message)
        }

        // Handle the response as needed
        console.log(response.data);
      } catch (error) {
        // Handle errors
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred while processing your request.");
        }
      }
    };

    // Call the handleSubmit function when the form is submitted
    const form = document.querySelector("#login-form");
    form.addEventListener("submit", handleSubmit);

    // Clean up the event listener when the component is unmounted
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, [username, password, navigate]);

  return (
    <div>
      <div className="container">
        <div className="overlay">
          <video src={video} autoPlay loop muted />
        </div>
        <div className="log-form">
          <form id="login-form">
            <h1>LOGIN</h1>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              name="username"
              className="form-input"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              className="form-input"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="LOG IN" id="form-submit" />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
