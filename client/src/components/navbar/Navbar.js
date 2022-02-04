import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/utils.css';
import './navbar.css';
import './respNav.css';

const Navbar = () => {
  return (
    <div>
      <div className="navigation max-width-s m-auto">
        <Link className="link" to="/">
          <h2>Another Bridge</h2>
        </Link>

        <ul className="nav-list">
          <li>
            <Link to="/about">about aditi.</Link>
          </li>
          <li>
            <Link to="/allblogs">blogs.</Link>
          </li>
          <li>
            <Link to="/contact">let's talk.</Link>
          </li>
          {/* <li>
            <Link to="/register">be a reader.</Link>
          </li> */}
          {/* <li>
            <Link to="/login">login.</Link>
          </li> */}
        </ul>

        <div className="nav-con-icons">
          <div className="con-icon">
            <Link to="#">
              <i
                className="fa fa-twitter"
                style={{ fontSize: '20px', color: 'black' }}
              ></i>
            </Link>
          </div>

          <div className="con-icon">
            <Link to="#">
              <i
                className="fa fa-instagram"
                style={{ fontSize: '20px', color: 'black' }}
              ></i>
            </Link>
          </div>

          <div className="con-icon">
            <Link to="#">
              <i
                className="fa fa-facebook"
                style={{ fontSize: '20px', color: 'black' }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
