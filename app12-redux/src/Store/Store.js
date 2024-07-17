import { configureStore } from '@reduxjs/toolkit'
import {Userslice} from './Usersslice'


export const store = configureStore({
    reducer:{
        user:Userslice
        },
})