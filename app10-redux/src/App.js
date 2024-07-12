
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createuseraction } from './Store/Action';
import './App.css';

import {

  deleteuseraction,
  readuseraction,
  updateuseraction
} from "./Store/Action"
import { useEffect, useState } from 'react';
import { createStore } from 'redux';

const store = createStore(createStore)

function App() {
  const [username, setusername] = useState("")
  const userinfo = useSelector((state) => state.users);
  const [isEdit, setIsedit] = useState(false);
  const [index, setindex] = useState(null);
  const dispatch = useDispatch();
  const handlecreateuser = () => {
    dispatch(createuseraction("hima"))
  };
  const readusers = () => {
    dispatch(readuseraction());
  };
  const handledelete = (usr) => {
    dispatch(deleteuseraction());

  };
  const handleupdate=()=>{
    dispatch(handlechange)
  }
  const handlechange = (e) => {
    const newusername = e.target.value;
    setusername(newusername);
  };
  const handlesubmit = () => {
    dispatch(createuseraction(username));
  };
  const handleedit = (usr, i) => {
    setIsedit(true);
    setusername(usr);
    setindex(i);

  };
  useEffect(()=>{
    readusers();
  },[]);

  return (
    <Provider store={store}>
      <div className="App">
        <h2>Welcome to Redux Reddy</h2>
        <button onClick={handlecreateuser}>Create User</button>
        <div>
          <form>
            <label>username:</label>
            <input 
            type="text"
            name="username"
            value={username}
            onChange={handlechange}
            />
            {isEdit?(
           <button onClick={handlechange} type="button">updateuser</button>
            ):(
             
            <button onClick={handlesubmit} type="button">Add user</button>
            )}
          </form>
          <ul>
            {userinfo.map((user, i) => (
              <li key={i}>{user.emai}{""}
              <button onClick={()=>{
                handledelete(user);
              }}>
                Delete
              </button>

              <button onClick={()=>{
                handledelete(user,i);
              }}>
                Edit
              </button>
              
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Provider>
  );
}

export default App;
