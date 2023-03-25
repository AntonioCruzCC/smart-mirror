import React from 'react'
import './DailyForecast.css'

function DailyForecast(props){
    return (
        <div className={'small-card ' + (props.nightMode ? 'dark' : 'light')} style={{'--animation-order': props.index}}>
            <div className='forecast-card-contents'>
                <div className='week-day'><span>{new Date(props.forecast.dt*1000).toLocaleDateString('pt-BR', { weekday: 'long' })}</span></div>
                <div className='forecast-info'>
                    <div className='humidity-info'>
                        <img src={require('../../assets/drop.png')} alt='pop-icon'/>
                        <span>{(props.forecast.pop*100).toFixed(0) + '%'}</span>
                    </div>
                    <div className='weather-icon'>
                        <img src={require(`../../assets/${props.forecast.weather[0].icon}.png`)} alt='weatherIcon'/>
                    </div>
                    <div className='min-and-max-temp'>
                        <span>{(props.forecast.temp.min).toFixed(0) + '°'}</span>
                        <span>{(props.forecast.temp.max).toFixed(0) + '°'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyForecast;