import React from "react";

const Reddy_table = ({allusers,i,usr,edituser,deleteuser,user }) => {
    return (
        <div>
            <table>
            <table className="table table-stripped table-hover" border={1}></table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>age</th>
                    <th>role</th>
                </tr>
            </thead>
            <tbody>
                {allusers.map}(user,i)
                return<tr key={i}>
                    <td>{usr.name}</td>
                    <td>{usr.email}</td>
                    <td>{usr.password}</td>
                    <td>{usr.pnone}</td>
                    <td>{usr.role}</td>
                   <td>
                    <button className="btn btn-warning" onClick={()=>{edituser(user)}}>edit</button>
                   </td>
                   <td>
                    <button className="btn btn-danger" onClick={()=>{deleteuser(usr)}}>delete</button>
                   </td>
                </tr>
               
            </tbody>
            </table>
        </div>
    );

};
export default Reddy_table;