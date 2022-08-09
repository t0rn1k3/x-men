import React from "react";

import './Card.css';

const Card = props => {
    return (
        <div className="card">
            <img src={props.hero.img} />
            <h2>{props.hero.name}</h2> 
            <p className="desc"><span>Power(s): </span><span className="power">{props.hero.powers}</span></p>
        </div>
    )
}   

export default Card;