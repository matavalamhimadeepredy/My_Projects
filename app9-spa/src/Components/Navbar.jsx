import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const handleLogout=()=>{
        
        localStorage.clear();
       

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink to={"/"} className="nav-link">
                                Home
                            </NavLink>                        </li>
                        <li className="nav-item">
                        <NavLink to={"/about"} className="nav-link">
                                About
                            </NavLink>                        </li>

                        <li className="nav-item">
                        <navLink to={"/users"} className="nav-link" >
                                Users
                            </navLink>                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link"to={"/login"} >Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/login"}onClick={handleLogout}>Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;