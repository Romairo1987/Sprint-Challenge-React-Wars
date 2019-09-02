import React from "react";
import './StarWars.css';


function StarWars(props){
    return(
        <div>
            <h2 className="header">{props.info}</h2>
        </div>
    )

}

export default StarWars;