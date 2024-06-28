import React from "react";

const HoveverCounter=() => {
    return(
        <div>
            <br />
            <br /> <br />
            <button onClick={handleincrement} className="btn btn-primary">click me</button>
        <h1> you clicked  {Count} times</h1>

        </div>
    )
}

export default HoveverCounter;