import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div>
      <div className="edgelines-h">
        <div className="login-section max-width-s m-auto">
          <div className="login-head">login here.</div>

          <div className="line2 max-width-s m-auto"></div>

          <div className="login-form">
            email.
            <div className="c-box">
              <input type="email" name="email" placeholder="Enter your email" />
            </div>
            password.
            <div className="c-box">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <button className="btn login-btn">login.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
