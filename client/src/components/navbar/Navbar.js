import React from 'react';
import './navbar.css';
import '../../css/ultils.css';
import '../../css/utilstwo.css';

const Navbar = () => {
  return (
    <div>
      <div className="navigation max-width-s m-auto">
        <a href="/">
          <h2>Another Bridge</h2>
        </a>

        <ul className="nav-list">
          {/* <li>
            <a href="#">home.</a>
          </li> */}
          <li>
            <a href="#">about alesa.</a>
          </li>
          <li>
            <a href="#">all blogs.</a>
          </li>
          <li>
            <a href="#">let's talk.</a>
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
