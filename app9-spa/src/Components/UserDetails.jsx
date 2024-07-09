import React from "react";
import { Link, useParams } from "react-router-dom";
import Users from "./Users";

const UserDetails = () => {
    const id = useParams();
    console.log(id)
    const getusersDetails = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/${id}");
        const userdata = await response.json();

        
    };

    return (
        <div className="container">
            {UserDetails.map((usr, i) => {
                <p key={i}>
                    <Link to={`${usr.id}`}>{usr.name}</Link>
                </p>
                
            })}

            <h3>Welcome to UserDetails  </h3>


        </div>
    );
};
export default UserDetails;