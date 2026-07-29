import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import "./Login.css"
const Login = ({setShowLogin, onLoginSuccess}) => {
    const [currState, setCurrState]=useState("Sign up")
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      const displayName = currState === 'Login' ? (name || email.split('@')[0] || 'User') : name || email.split('@')[0] || 'User';
      onLoginSuccess(displayName);
    };

  return (
    <div className='login-popup'>
      <form className='login-container' onSubmit={handleSubmit}>
        <div className="login-title">
            <h2>{currState}</h2>  
            <ImCross className='cross' onClick={()=>setShowLogin(false)} />
        </div>
        <div className="login-inputs">
            {currState==='Login' ? (
              <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            ) : (
              <input
                type="text"
                placeholder='Your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              placeholder='your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
        </div>
        <button type="submit">{currState==='Sign up'?"Create account":"Login"}</button>
        <div className="login-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==='Login'
        ? <p>Create a new account?<span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
        : <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
}
      </form>
    </div>
  )
}

export default Login
