import React from "react";
import '../Card.css';

const Card = (props) => {
    function select(){
        view()
    } //when clicking on a card div takes user to that complex housing information

    function view(){
        window.location = `https://auxiliary.georgiasouthern.edu/housing/halls/${props.dbName}/`
    } //when clicking on divs button takes user to complex housing information

    return (
        <div className="complex" id={props.name} onClick={select}>
            <img src={props.imageSrc} alt="" />
            <h1>{props.name}</h1>
            <h3>{props.address}</h3>
            <button onClick={view}>View</button>
        </div>
    ) //creates a card div that display complex information
}

export default Card;