
import React, { useState } from "react";
import Grantparent from "./Grantparent";
import { usercontextconsumer } from "./User.context";

 const Main =() => {
    const {message,setmessage}=useState("welcome to reddy")
    const[greeting,setgreeting]=useState("context api")  
    return(
        <div  id="maindiv">
            <p>Main</p>
            <usercontextprovider value={greeting }>
            <Grantparent message={message}/>
            </usercontextprovider>
                       
        </div>
    )
 }
 export default Main;




















