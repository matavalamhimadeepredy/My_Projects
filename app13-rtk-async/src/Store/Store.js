
import { configureStore } from "@reduxjs/toolkit";
import Userslice, { UsersSlice } from "./Userslice";

export const Store = configureStore({
    reducer: {
        usersState: UsersSlice,
    },
});
