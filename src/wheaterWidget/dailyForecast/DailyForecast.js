import React from 'react'
import './DailyForecast.css'

function DailyForecast(props){
    return (
        <div className={props.nightMode ? 'forecast-card-dark' : 'forecast-card-light'} style={{'--animation-order': props.index}}>
            <div className='forecast-card-contents'>
                <div className='week-day'><h4>{new Date(props.forecast.dt*1000).toLocaleDateString('pt-BR', { weekday: 'long' })}</h4></div>
                <div className='forecast-info'>
                    <div className='humidity-info'>
                        <img src={require('../../assets/wind-humidity.png')} alt='wind-icon'/>
                        <h6>{props.forecast.humidity + '%'}</h6>
                    </div>
                    <div className='weather-icon'>
                        <img src={require(`../../assets/${props.forecast.weather[0].icon}.png`)} alt='weatherIcon'/>
                    </div>
                    <div className='min-and-max-temp'>
                        <h6>{(props.forecast.temp.min).toFixed(0) + '°'}</h6>
                        <h6>{(props.forecast.temp.max).toFixed(0) + '°'}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyForecast;