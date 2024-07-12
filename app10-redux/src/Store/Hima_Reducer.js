
import { CREATE_USER } from './Constrants';
import { DELETE_USER, READ_USER, UPDATE_USER } from './Constrants';
 
const Initialstate = {
  users: [],
};
 export const Hima_Reducer = (state = Initialstate, action) => {
  switch (action.type) {
    case CREATE_USER:
      console.log(action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case READ_USER:
      console.log(action.payload)
      return {
       ...state,
       users:[...state.users,action.payload],
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user, index) =>
          index === action.payload.index ? action.payload.username : user
        ),
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user !== action.payload),
      };

    default:
      return state;
  }
};
