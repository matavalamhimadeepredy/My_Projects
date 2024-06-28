import React,{useState} from "react";
 
const Clickcounter=({count,handleincrement}) => {
    return(
        <div>
            <br />
            
<button onClick={handleincrement} className="btn btn-primary">Click me hima</button>
 <br /> <br />

 <h3> you click {count} times</h3>
 

        </div>
    )
}
export default Clickcounter;