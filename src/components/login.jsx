import React, {useState,useEffect} from "react";
import axios from "axios";
import video from "../assests/hacking_bgr.mp4";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    // Empty dependency array to ensure the effect is only called once

    // Define the base URL
    const baseUrl = "https://your-base-url.com"; // Replace with your actual base URL

    // Create a function to handle the form submission
    const handleSubmit = async (event) => {
      event.preventDefault();

      // Create an object with the username and password values
      const data = {
        username: username,
        password: password,
      };

      try {
        // Make a POST request to the base URL with the data
        const response = await axios.post(baseUrl, data);

        // Handle the response as needed
        console.log(response.data);
      } catch (error) {
        // Handle errors
        console.error(error);
      }
    };

    // Call the handleSubmit function when the form is submitted
    const form = document.querySelector("#login-form");
    form.addEventListener("submit", handleSubmit);

    // Clean up the event listener when the component is unmounted
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="LOG IN" id="form-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
