import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/utils.css';
import './navbar.css';

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
          <li>
            <Link to="/register">be a reader.</Link>
          </li>
          <li>
            <Link to="/login">login.</Link>
          </li>
        </ul>

        <div className="right-nav">
          <form action="/search.html" method="GET">
            <input
              className="form-input"
              type="text"
              placeholder="Search Article"
              name="query"
            />
            <button className="btn search-btn">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
