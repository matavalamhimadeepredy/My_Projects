import React from "react";
import { NavLink,  } from 'react-router-dom'


const Dashboard = () => {
    return (
        <div className="container">

            <h1>welcome to reddy dashboard!!!!!</h1>
            <ul>
                <li><NavLink to={'Products'}>Products</NavLink>
                </li>
                <li>
                    <NavLink to={'project'}>Project</NavLink>
                </li>
                <li>
                    <NavLink to={'Review'}>Review</NavLink>
                </li>
            </ul>


        </div>
    )
}
export default Dashboard;