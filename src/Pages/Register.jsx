import React from 'react'
import "../PageCss/Register.css"

const Register = () => {
    return (
        <div className="signup-container">
          <form>
            <h2>Sign Up</h2>
    
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
    
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
    
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required />
    
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
}

export default Register
