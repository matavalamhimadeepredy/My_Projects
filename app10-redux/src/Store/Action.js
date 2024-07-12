
import { useDispatch } from "react-redux";
import { CREATE_USER, DELETE_USER, READ_USER, UPDATE_USER } from "./Constrants";


export const createuseraction = (username) => {
  return {
    type: CREATE_USER,
    payload: username,
  };
};
export const readuseraction = () => {
  return async(dispatch)=>{
    const Users=await (await fetch("http://localhost:3000/nethaji_users")).json()
    dispatch({
      type:READ_USER,
      payload:Users
    })
  }
};
export const updateUserAction = ({ username, index }) => {
  return {
    type: UPDATE_USER,
    payload: {
      username,
      index,
    },
  };
};
export const deleteuseraction = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};
