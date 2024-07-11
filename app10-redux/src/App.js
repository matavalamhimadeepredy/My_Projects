import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { CreateUserAction, deleteUserAction, ReadUserAction } from './Store/Action';
import { useEffect, useState } from 'react';
function App() {
  const userInfo = useSelector((state) => state.users)
  console.log(userInfo)
  const dispatch=useDispatch()
  console.log(userInfo)

  const handlecreateuser=()=>{
    console.log(" handle create user!!!!!")
    dispatch(CreateUserAction("reddy"))
  }
  const readuser=()=>{
    dispatch(ReadUserAction)

  }
  const handledelete=()=>{
dispatch(deleteUserAction())}
  
  useEffect (()=>{
readuser()
  },[])
  return (
    <div className="App">
      <h2>welcome to Reducer reddy</h2>
<button onClick={handlecreateuser}>create user</button>

<hr/>
<ul>

</ul>
{userInfo.map((usr,i)=><li key={i}>(usr,i) <button onClick={ handledelete}>delete</button></li>)}
    </div>
  );
}

export default App;
