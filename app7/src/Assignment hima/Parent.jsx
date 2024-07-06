
import React from "react";
import Grantchild from "./Grantchild";

 const Parent =({message}) => {
    return(
        <div  id="parent">
            <p>Parent</p>
           <Grantchild message={message} />
        </div>
    )
 }
 export default Parent;




















