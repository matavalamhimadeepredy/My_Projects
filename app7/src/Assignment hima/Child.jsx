
import React from "react";

const Child = ({ message }) => {
    return (
        <div id="Child" >
            <h2>chaild</h2>
            <h3>{message}</h3>
            <usercontextconsumer >
                {(value) => {
                    return <h1>{value}</h1>
                }}
            </usercontextconsumer>
        </div>
    )
}
export default Child;




















