import React from "react";

function WeatherIcon(props){
    return(
        <img src={require(`../../assets/${props.icon}.png`)} alt='weatherIcon'/>
    )
}

export default WeatherIcon;
