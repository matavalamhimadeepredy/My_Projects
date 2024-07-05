
import React from "react";
import Child from "./Child";
import Grantchild from "./Grantchild";

 const Parent =({message}) => {
    return(
        <div  id="parent">
            <p>Parent</p>
           <Parent/>
           <Grantchild message={message} />
        </div>
    )
 }
 export default Parent;




















