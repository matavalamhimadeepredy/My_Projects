import React from "react";

import { useState } from "react";

 const Reddy_counter =({props})=>{
  
     const [setcount,count,increcount]= useState(0);

   const incrementcount=()=>{
    setcount (count+1)
   }
   const decrement=()=>{
    setcount (count-1)
   }
   return <div>
    <h2>you clicked{count} times</h2>
    <button onClick={incrementcount}>increment</button>
    <button onClick={decrement  }>decrement</button>
   </div>

 }
 export default Reddy_counter;