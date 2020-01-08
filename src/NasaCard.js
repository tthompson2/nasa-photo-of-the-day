import React from "react";
import "./App.css";

const NasaCard = props => {
    
    return (
        <div className='img-centerer'>
         <div>
            {props.title}
            <br/>
            {props.media_type}
            <br/>
            {props.service_version}
            <br/>
            {props.url}
            <br/>
            {props.hdurl}
            <br/>
            <br/>
            <br/>
            {props.explanation}
            <br/>
            <br/>
            <img src={props.url} alt={props.title}/>
          </div>
        </div>
    )
}

export default NasaCard;