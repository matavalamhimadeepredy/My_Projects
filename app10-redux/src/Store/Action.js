import { type } from "server/reply";
import { CREATE_USER, DELETE_USER, READ_USER } from "./Constants";


export const CreateUserAction = (username) =>{
  return(
    type=CREATE_USER,
    payload=username
  )}
export const ReadUserAction = () => {
    return{
        type:READ_USER

    }
};
export const UpdateUserAction = () => {};
export const deleteUserAction = (user) => {
   return{
    type:DELETE_USER,
    payload:user
   }
};
