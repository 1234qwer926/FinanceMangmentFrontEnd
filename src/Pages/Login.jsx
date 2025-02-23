import React from 'react'
import "../PageCss/Login.css"

const Login = () => {
  return (
    <div className='login-container'>
      <form action="/">
        <label htmlFor="email">Email : </label>
        <input type="email" placeholder='Enter your Email' name='email' id='email' />
        <label htmlFor="pass">Password : </label>
        <input type="password" placeholder='********' name='pass' id='password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
