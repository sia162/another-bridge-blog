import React, { useState } from 'react';
import './register.css';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();

  const [registerDetails, setRegisterDetails] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState('');

  const handleRegisterDetails = e => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
    setError(false);
  };

  const handleSignup = async e => {
    e.preventDefault();

    const { name, email, password, cpassword } = registerDetails;

    if (password !== cpassword) {
      setError(true);
      setErrormsg("Passwords Don't Match!");
    } else {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (json.error) {
        setError(true);
        setErrormsg(json.error);
      } else {
        setError(false);
        history.push('/login');
      }
    }
  };

  return (
    <div>
      <div className="edgelines-h">
        <div className="login-section max-width-s m-auto">
          <div className="login-head">register here.</div>

          <div className="line2 max-width-s m-auto"></div>

          <form onSubmit={handleSignup}>
            <div className="login-form">
              email.
              <div className="c-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={registerDetails.email}
                  onChange={handleRegisterDetails}
                />
              </div>
              name.
              <div className="c-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={registerDetails.name}
                  onChange={handleRegisterDetails}
                />
              </div>
              create password.
              <div className="c-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={registerDetails.password}
                  onChange={handleRegisterDetails}
                />
              </div>
              confirm password.
              <div className="c-box">
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Enter your password again"
                  value={registerDetails.cpassword}
                  onChange={handleRegisterDetails}
                />
              </div>
              <button type="submit" className="btn register-btn">
                register.
              </button>
              {error && (
                <p style={{ textAlign: 'center', color: 'red' }}>{errormsg}!</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
