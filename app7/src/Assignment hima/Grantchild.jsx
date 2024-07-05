
import React from "react";
import Child from "./Child";

 const Grantchild =({message}) => {
    return(
        <div  id="Grantchild" >
            <p>Grantchild</p>
           <Grantchild/>
           <Child message ={message}/>
        </div>
    )
 }
 export default Grantchild;




















