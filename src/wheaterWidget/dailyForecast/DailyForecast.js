import React from 'react'
import './DailyForecast.css'

function DailyForecast(props){
    return (
        <div className={props.nightMode ? 'forecast-card-dark' : 'forecast-card-light'}>
            <div className='forecast-card-contents'>
                <div className='week-day'>Segunda-feira</div>
                <div className='forecast-info'>
                    <img src={require('../../assets/03d.png')} alt='wind-icon'/>
                </div>
            </div>
        </div>
    )
}

export default DailyForecast;