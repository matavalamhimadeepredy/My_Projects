import React from "react";
import { Navigate } from "react-router-dom";

const Protected_Route = ({ children }) => {
    const isuserlogedin = true;
    return isuserlogedin ? children : <Navigate to={'Login'}/>
   
        
    
}
export default Protected_Route;