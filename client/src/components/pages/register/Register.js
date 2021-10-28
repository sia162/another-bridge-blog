import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div>
      <div className="edgelines-h">
        <div className="login-section max-width-s m-auto">
          <div className="login-head">register here.</div>

          <div className="line2 max-width-s m-auto"></div>

          <div className="login-form">
            email.
            <div className="c-box">
              <input type="email" name="email" placeholder="Enter your email" />
            </div>
            name.
            <div className="c-box">
              <input type="text" name="name" placeholder="Enter your name" />
            </div>
            create password.
            <div className="c-box">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            confirm password.
            <div className="c-box">
              <input
                type="password"
                name="c-password"
                placeholder="Enter your password again"
              />
            </div>
            <button className="btn register-btn">register.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
