import React from "react";
import { Navigate } from "react-router-dom";

const Protected_Route = ({ children }) => {
    const loggedInUser=JSON.parse(localStorage.getItem ('users'));
        console.log(loggedInUser )
    return loggedInUser !==null ?children : <Navigate to={'/ Login'}/>;
   
        
    
}
export default Protected_Route;