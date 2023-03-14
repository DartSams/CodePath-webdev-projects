import React from "react";

const Title = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtext}</h3>
        </div>
    )
}

export default Title;