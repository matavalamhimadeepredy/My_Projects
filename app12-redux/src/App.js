import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {createuseraction,deleteUserAction,readUserAction,updateUserAction,} from"./Store/Store";
import { useEffect, useState } from "react";



function App() {
  const [Userslice, setUser] = useState({
    email: "",
    password: "",
  });
  const usersInfo = useSelector((state) => state.users);
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(null);
  const dispatch = useDispatch();

  const handleCreateUser = () => {
    dispatch('createUserAction'(Userslice));
    clearUser();
    };
  const readUsers = () => {
    dispatch('readUserAction'());
  };

  const handleDelete = (usr) => {
    dispatch('deleteUserAction'(Userslice));
  };

  const handleChange = (e) => {
    const users = { ...Userslice, [e.target.name]: e.target.value };
    setUser(Userslice);
  };

  const handleSubmit = () => {
    if (isEdit) {
      dispatch('updateUserAction'({ Userslice, index }));
      setIsEdit(false);
      setIndex(null);
    } else {
      dispatch((Userslice));
    }
    clearUser();
  };

  const handleEdit = (usr, i) => {
    setIsEdit(true);
    setUser(usr);
    setIndex(i);
  };

  useEffect(() => {
    readUsers();
  }, []);

  const clearUser = () => {
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="App">
      <h2>Welcome to Redux reddy !!!</h2>
      <button onClick={handleCreateUser}>Create User</button>
      <hr />
      <form>
        <label>Email : </label>
        <input
          type="text"
          name="email"
          value={Userslice.email}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Password : </label>
        <input
          type="text"
          name="password"
          value={Userslice.password}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit} type="button">
          {isEdit ? "Update User" : "Add User"}
        </button>
      </form>
      <ul>
        {usersInfo.map((Userslice, i) => (
          <li key={i}>
            {Userslice.email}{" "}
            <button
              onClick={() => {
                handleDelete(Userslice);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleEdit(Userslice, i);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
