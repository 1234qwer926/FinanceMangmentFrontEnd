import React from "react";
import "../PageCss/Login.css"

const Login = () => {
  return (
    <div className="login-container">
      <form>
        <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
