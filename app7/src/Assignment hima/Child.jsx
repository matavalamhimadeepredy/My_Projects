
import React from "react";

 const Child =(message) => {
    return(
        <div  id="Child" >
           <h2>{message}</h2>
           <usercontextconsumer>
            {(value )=>{
                return <h2>{value}</h2>

            }}
           </usercontextconsumer>
        </div>
    )
 }
 export default Child;




















