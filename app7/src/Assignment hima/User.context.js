import { createContext } from "react";

export const usercontext = createContext()


export const usercontextprovider = usercontext.Provider;
export const usercontextconsumer = usercontext.Consumer; 