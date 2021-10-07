import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '../../css/utils-blog.css';
import '../../css/utils.css';

const Navbar = () => {
  return (
    <div>
      <div className="navigation max-width-s m-auto">
        <Link to="/">
          <h2>Another Bridge</h2>
        </Link>

        <ul className="nav-list">
          {/* <li>
            <a href="#">home.</a>
          </li> */}
          <li>
            <Link to="/about">about alesa.</Link>
          </li>
          <li>
            <Link to="/">all blogs.</Link>
          </li>
          <li>
            <Link to="/contact">let's talk.</Link>
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
            <button className="btn">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
