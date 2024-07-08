import React, { useEffect, useState } from "react";

const Users = () => {
    const [usersDetails, setuserDetails] = useState([]);
    useEffect(() => {
        getusers()

    }, []);
    const getusers = async () => {
        const response = await
            (await fetch("https://jsonplaceholder.typicode.com/users"

            ).then());
        const users = await response.json()
        setuserDetails(users)
    }
    return (
        <div>
{usersDetails.map((usr,i)=><p key={i}>{usr.name}</p>)}
        </div>
    )
}
export default Users;