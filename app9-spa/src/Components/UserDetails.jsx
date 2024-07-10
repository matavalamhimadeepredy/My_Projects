import React from "react";
import { Link, useParams } from "react-router-dom";

import {users} from'react'

const UserDetails = () => {
    const id = useParams();
    
    const getusersDetails = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/${id}");
        const userdata = await response.json();


    };

    return (
        
        <div className="container">
            {UserDetails.map((usr, i) => {
                <p key={i}>
                    <Link to={`${users.id}`}>{users.name}</Link>
                </p>

            })}

            <h3>Welcome to UserDetails  </h3>
<ul>
    <li>{users.name}</li>
    <li>{users.email}</li>
    <li>{users.username}</li>
</ul>

        </div>
    );
};
export default UserDetails;