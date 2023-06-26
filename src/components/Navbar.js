import React, { Component } from 'react';
import{ Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                <Link className="nav-link" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Home2">
                  Home2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Hooks">Hooks</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/EventBind">EventBind</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ParentComponent">Parent</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/UserGreeting">userGreeting</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NewList">List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Hoc">HOC</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Todo">Todo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
