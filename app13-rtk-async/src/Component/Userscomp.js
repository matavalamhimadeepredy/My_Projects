
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createUserInServer, deleteUserInServer, getUsersFromServer, udpateUserInServer } from "../UsersSlice/Userslice"
const UsersComp = () => {
  const dispatch = useDispatch();
  const usersDetails = useSelector((state) => state.usersState.users);

  const handleGetUsers = () => {
    dispatch(getUsersFromServer())
  };

  const handleDelete = (user) => {
    dispatch(deleteUserInServer(user))
  }

  const handleCreateUser = () => {
    const userInfo = {
      "email": "Hima  rowdy@gmail.com",
      "password": 9396
    };
    dispatch(createUserInServer(userInfo))
  }

  const handleUpdateUser = () => {
    const userInfo = {
      "email": "siddhu siddhu@gmail.com",
      "password": 8989,
      "id": 3
    };
    dispatch(udpateUserInServer(userInfo))
  }

  return (
    <div>
      <button onClick={handleGetUsers}>Get Users</button>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleUpdateUser}>Update User</button>
      <ul>
        {usersDetails.map((user, i) => <li key={i}>
          {user.email} <button onClick={() => { handleDelete(user) }}>
            Delete User</button>
        </li>)}
      </ul>
    </div>
  );
};

export default UsersComp;
