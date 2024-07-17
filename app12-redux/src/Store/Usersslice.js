import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
    user: ["hima","sai","vijay","nethaji"],
};
export const Userslice = createSlice({
    name: "userslice",
    initialState: initialstate,
    reducers: {
        createusers:(state,action)=>{
            state.Userslice.push(action.payload)
        },
        readuser:()=>{},
        updateuser:()=>{},
        deleteuser:(state,action)=>{
            state.Userslice=state.users.filter((usr)=>usr  !==action.payload)
        },
    },
});


export default Userslice.reducer
export const{createusers,deleteuser }=Userslice.actions