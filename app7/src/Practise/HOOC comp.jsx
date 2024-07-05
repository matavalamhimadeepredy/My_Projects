import React from "react";
import Reddy_counter from "./Reddy_Counter";
  
const HOOccomp =(Reddy_counter)=>{
    const NewHooc =()=>{
    return<Reddy_counter person={welcometoreddy}/>;
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
export default HOOccomp;