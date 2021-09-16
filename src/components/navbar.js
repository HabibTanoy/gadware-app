import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    state = {  }
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-color fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-5" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
                 <img src="./gad-logo.png" width="80" height="50" alt="" />
            </a>
              <ul className="navbar-nav  mt-2 mt-lg-0 ml-auto text-uppercase">
                <li className="nav-item active mx-3">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item mx-3">
                  {/* <a className="nav-link" href="">About</a> */}
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item mx-3">
                  {/* <a className="nav-link" href="#">service</a> */}
                  <Link className="nav-link" to="/service">service</Link>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="#">apps</a>
                  {/* <Link className="nav-link" to="/about">About</Link> */}
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="#">docs</a>
                  {/* <Link className="nav-link" to="/about">About</Link> */}
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="#">contact us</a>
                  {/* <Link className="nav-link" to="/about">About</Link> */}
                </li>
              </ul>
            </div>
          </nav>
            </div>
         );
    }
}

export default Navbar;
