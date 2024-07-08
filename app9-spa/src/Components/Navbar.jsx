import React from "react";
import {Link}from'react-router-dom'
const Navbar=()=>{
    return(
        <div classnameName="container">
  <nav classname="navbar navbar-expand-lg navbar-light bg-primary">
  <div classname="container-fluid">
      <a classname="navbar-brand" href="#">Brand</a>
      <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span classname="navbar-toggler-icon"></span>
      </button>
      <div classname="collapse navbar-collapse" id="navbarNav">
        <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
          <li classname="nav-item">
            <a classname="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="#">Features</a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="#">Users</a>
          </li>
        </ul>
        <Link>
        home 
        </Link>
        <ul classname="navbar-nav ms-auto">
          <li classname="nav-item">
            <a classname="nav-link" href="#">Login</a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

        </div>
    )
}
export default Navbar;