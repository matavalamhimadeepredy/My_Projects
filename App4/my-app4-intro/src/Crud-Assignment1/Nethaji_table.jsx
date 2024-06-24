import React from "react";

const Nethajitable = ({ allUsers,editUser,deleteUser }) => {
  return (
    <div>
      <table className="table table-striped table-hover " border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>contact</th>
            <th>role</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {allUsers.map((usr,i)=>{
                return <tr key={i}>
                    <td>{usr.name}</td>
                    <td>{usr.email}</td>
                    <td>{usr.password}</td>
                    <td>{usr.contact}</td>
                    <td>{Usr.role}</td>

                    <td>
                        <button className="btn btn-warning" onClick={()=>{editUser(usr)}}>Edit</button>
                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={()=>{deleteUser(usr)}}>Delete</button>
                    </td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Nethajitable