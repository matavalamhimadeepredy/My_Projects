import { CREATE_USER, DELETE_USER, READ_USER, UPDATE_USER } from "./Constants";

const Initialstate = {
    users: ["ravi", "gopi", "sai"],
};
export const RootReducer = (state = Initialstate, action) => {
    console.log("Rootreducercall")
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                users: [state.users, action.payload],
            }

        case READ_USER:
            return state
                
        case DELETE_USER:

            break;

        case DELETE_USER:
return{
    ...state,
    users:[...state.users.filter((users)=>users!==action.payload)],
}
            

        default:
            return state;
    }
};