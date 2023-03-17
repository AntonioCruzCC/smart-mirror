import './HourlyForecast.css'
import React from 'react'

function HourlyForecast(props){
    return (
        <div className={'hourly-forecast-card '  + (props.nightMode ? 'dark' : 'light')}>
            <div className='hourly-forecast-card-contents'>
                <div className='hourly-info'>
                    <span>Hora</span>
                    <div className='weather-icon'>
                        <img src={require('../../assets/01d.png')} alt='wind-icon' />
                    </div>
                    <span>Chance de chuva</span>
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast