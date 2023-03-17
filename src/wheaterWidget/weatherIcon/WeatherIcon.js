import './WeatherIcon.css'

import React from "react";

function WeatherIcon(props){
    return(
        <img src={require(`../../assets/${props.icon}.png`)} alt='weatherIcon' className='primary-weather-icon' key={props.icon}/>
    )
}

export default WeatherIcon;
