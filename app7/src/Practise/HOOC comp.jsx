import React from "react";
import Reddy_counter from "./Reddy_Counter";
import { useState } from "react";
  
const HOOc_comp =(Reddy_counter)=>{
    const NewHooc =()=>{
    return<Reddy_counter person={"welcometoreddy"}/>;
    const [count,setcount]= useState(0);

    const incrementcount=()=>{
     setcount (count+1)
    }
    const decrement=()=>{
     setcount (count-1)
    }
    return <Reddy_counter count={count} incrementcount={incrementcount}/>
    }; 
    return NewHooc;
};
export default HOOc_comp;