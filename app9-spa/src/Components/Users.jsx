import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const Users = () => {
    const [usersDetails, setuserDetails] = useState([]);
    useEffect(() => {
        getusers()

    }, []);
    const getusers = async () => {
        const response = await
            (await fetch("https://jsonplaceholder.typicode.com/users"
            ).then());
        const users = await response.json();
        
        setuserDetails(users)
    }
    return (
        <div className="container">
            {usersDetails.map((usr, i) =>
                <p key={i}>
                    <Link to={`${usr.id}`}>{usr.name}</Link>
                    
                    
                </p>
            )}
        </div>
    )
}
export default Users;