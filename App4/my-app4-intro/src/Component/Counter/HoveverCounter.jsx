import React, { useState } from "react";

const HoveverCounter = ({ Count, handleincrement }) => {
    return (
        <div>
            <br />
            <button  onMouseOver={handleincrement} className="btn btn-primary">Hover me</button>
            <br /> <br />
            <h1> you Hovered {Count} Times</h1>

        </div>
    )
}

export default HoveverCounter