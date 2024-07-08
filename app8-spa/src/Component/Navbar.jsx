
import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div id="nav">
        <ul>
          <li className="nav-item">
            <Link to={"/"} className="nav-item">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-item">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"} className="nav-item">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Register"} className="nav-item">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Login"} className="nav-item">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Navbar;
