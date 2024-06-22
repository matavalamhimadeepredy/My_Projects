import React from "react";
import { useState } from "react";

const Nethaji_form = () => {
    const [user, setuser] = useState({});
    const createUser = () => { };
    const editUser = () => { };
    const deleteUser = () => { };
    const updateUser = () => { };
    const clearUser = () => { };
    const getUsersfromserver = () => { };
    const handlechange = () => { };
}
<div className="container">
    <div className="row">
        <div className="col-4">
            <User_form  handlechange={handlechange}/>
            <div className="col-8">col2</div>
            <User_table  />

        </div>

    </div>

</div>


export default Nethaji_form;