
import React, { useState } from "react";
import Grantparent from "./Grantparent";

 const Main =() => {
    const [message]=useState("welcome to reddy")
    const[greeting]=useState("context api")  
    return(
        <div  id="main">
            <p>Main</p>
            <usercontextprovider value={greeting }>
            <Grantparent message={message}/>
            </usercontextprovider>
                       
        </div>
    )
 }
 export default Main;




















