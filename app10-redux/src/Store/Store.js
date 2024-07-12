
import { applyMiddleware, createStore } from "redux";
import {thunk }from 'redux-thunk'
import { Hima } from "./Hima";
export const Store = createStore(Hima, applyMiddleware(thunk));
