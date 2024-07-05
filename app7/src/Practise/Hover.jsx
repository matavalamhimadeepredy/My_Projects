import React from "react";

import { useState } from "react";

 const Hover_Counter =()=>{
   const [count,setcount]= useState(0);

   const incrementcount=()=>{
    setcount (count+1)
   }
   const decrement=()=>{
    setcount (count-1)
   }
   return <div>
    <h2>you Hovered{count} times</h2>
    <button onMouseOver={incrementcount}>increment</button>
    <button onMouseOut={decrement}>decrement</button>
   </div>

 }
 export default Hover_Counter