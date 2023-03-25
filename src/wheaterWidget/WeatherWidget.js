import './WeatherWidget.css'

import React from 'react'
import useLocation from '../location/useLocation'
import useForecast from '../forecast/useForecast'
import DailyForecast from './dailyForecast/DailyForecast'
import HourlyForecast from './hourlyForecast/HourlyForecast'
import WeatherIcon from './weatherIcon/WeatherIcon'
import SunriseAndSunset from './sunriseAndSunset/SunriseAndSunset'

function WeatherWidget() {

    const location = useLocation()
    const forecast = useForecast()
    const nightMode = forecast?.current.weather[0].icon.endsWith('n')

    return (
        <div className='weather-widget-content'>
            <div className={'card ' + (forecast && nightMode ? 'dark' : 'light')}>
                {forecast?
                    <div className='card-contents'>
                        <div className='weather-icon'>
                            <WeatherIcon icon={forecast.current.weather[0].icon} />
                        </div>
                        <div className='time-and-locale'>
                            <h1>{forecast.current.temp.toFixed(0) + '°'}</h1>
                            <div className='locale-name'>
                                <span>{location.localeName}</span>
                                <img src={require('../assets/pin.png')} alt='pin icon' />
                            </div>
                        </div>
                        <div className='weather-info'>
                            <div className='info-group'>
                                <img src={require('../assets/thermometer.png')} alt='thermometer-icon' />
                                <div className='min-max-temp'>
                                    <span>{forecast.daily[0].temp.max.toFixed(0) + '°'}</span>
                                    <span>{forecast.daily[0].temp.min.toFixed(0) + '°'}</span>
                                </div>
                            </div>
                            <div className='info-group'>
                                <img src={require('../assets/wind.png')} alt='wind-icon' />
                                <span>{forecast.current.wind_speed.toFixed(0) + 'Km/h'}</span>
                            </div>
                            <div className='info-group'>
                                <img src={require('../assets/wind-humidity.png')} alt='wind-icon' />
                                <span>{forecast.current.humidity.toFixed(0) + '%'}</span>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='card-contents'>
                        <div className='weather-icon'>
                            <WeatherIcon icon='03d' />
                        </div>
                        <div className='time-and-locale'>
                            <h3>Looking outside...</h3>
                        </div>
                    </div>
                }
            </div>
            <div className='next-days-forecast'>
                {   
                    nightMode != null && forecast && <HourlyForecast nightMode={nightMode} forecast={forecast}/>
                }
                {
                    nightMode != null && forecast && <SunriseAndSunset nightMode={nightMode} forecast={forecast}/>
                }
                {
                    nightMode != null && forecast && forecast.daily.slice(1, 5).map((day, index) => <DailyForecast nightMode={nightMode} forecast={day} key={index} index={index} />)
                }
            </div>
        </div>
    )
}
export default WeatherWidget;

