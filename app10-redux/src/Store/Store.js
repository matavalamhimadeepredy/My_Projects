
import { applyMiddleware, createStore } from "redux";
import {thunk }from 'redux-thunk'
import { Hima_Reducer } from "./Hima_Reducer";
export const Store = createStore(Hima_Reducer, applyMiddleware(thunk));
