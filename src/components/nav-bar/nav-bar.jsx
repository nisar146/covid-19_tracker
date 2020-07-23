import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const NavBar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a className="navbar-brand" href="#">Navbar w/ text</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={{ pathname: '/home' }} className="navbar-brand">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={{ pathname: '/history' }} className="navbar-brand">History</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Link to={{ pathname: '/contact' }} className="navbar-brand my-2 my-lg-0">Contact Me</Link>
          </span>
        </div>
      </nav>
    </Router>
  )
}

export default NavBar;