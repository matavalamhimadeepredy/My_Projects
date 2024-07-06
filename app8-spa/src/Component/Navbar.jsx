import React from "react";
import { Link } from "react-router-dom";

const Navbar =() => {
    return(
        <nav classname="navbar navbar-expand-lg bg-primary">
  <div classname="container-fluid">
    <a classname="navbar-brand" href="#">Navbar</a>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarNav">
      <ul classname="navbar-nav">
        <li classname="nav-item">
            
          
        </li>
        <li classname="nav-item">
          <a classname="nav-link" >
            Home
            </a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link">
            about
            </a>
        </li>
        <li classname="nav-item">
            <Link to={"/contact"} className="nav-link">
            Contact
            </Link>
          
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar;