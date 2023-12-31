import React, { Component } from 'react';
import{ Link } from "react-router-dom";

class Navbar2 extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="Favcolor">
                  Favcolor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Effect">
                  Effect
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Context1">
                  Context
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Refex">
                  Refex
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Reduce">
                  Reduce
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="useCallBack">
                  UsecallBack
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="customHook">
                  Custom
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar2;
