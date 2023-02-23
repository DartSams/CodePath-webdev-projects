import React from "react";
import '../index.css'

const Event = (props) => {
    return (
        <div>
            <td className={"Event " + props.color}>
                <h5>{props.event}</h5>
                <h6>{props.location}</h6>
            </td>
        </div>
    )
}

export default Event;