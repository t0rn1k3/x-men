import React from "react";
import Card from "./Card";

import './CardCont.css';

const CardCont = props => {
    return (
        <div className="card-container">
            {props.heroes.map(hero => (
            <Card  hero={hero} />
          ))}
        </div>
    )
}

export default CardCont;