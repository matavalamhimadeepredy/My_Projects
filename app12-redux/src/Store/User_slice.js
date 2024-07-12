import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
    users: ["hima","reddy","vijay","sai"],
};
export const Userslice = createSlice({
    name: "users",
    initialState: initialstate,
    reducers: {
        createusers:(state,action)=>{
            state.users.push(action.payload)
        },
        readuser:()=>{},
        updateuser:()=>{},
        deleteuser:(state,action)=>{
            state.users=state.users.filter((usr)=>usr  !==action.payload)
        },
    },
});

export default Userslice.reducer
export const{createusers,deleteuser }=Userslice.actions