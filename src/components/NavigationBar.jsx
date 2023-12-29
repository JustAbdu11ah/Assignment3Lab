import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="navbar-brand"><Link to="/" style={{ textDecoration: 'none' }}>Math Magicians</Link></h1>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/calculator" className="nav-link">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Quote</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </>
  );
}

export default Navbar;
