import './HourlyForecast.css'
import React from 'react'

function HourlyForecast(props) {
    return (
        <div className={'hourly-forecast-card ' + (props.nightMode ? 'dark' : 'light')}>
            <div className='hourly-forecast-card-contents'>
                <div className='scrollable-area'>
                    {
                        props.forecast.hourly.slice(1, 25).map(hour => {
                            return (
                                <div className='hourly-info' key={hour.dt}>
                                    <span>{new Date(hour.dt * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                                    <div className='hourly-weather-icon'>
                                        <img src={require(`../../assets/${hour.weather[0].icon}.png`)} alt='weatherIcon' />
                                    </div>
                                    <span>{(hour.pop * 100).toFixed(0) + '%'}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast