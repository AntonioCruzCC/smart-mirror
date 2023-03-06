import React from 'react'
import useInstantWeather from '../instantWeather/useInstantWeather'
import useLocation from '../location/useLocation'
import './WeatherWidget.css'
//import DailyForecast from './dailyForecast/DailyForecast'
import WeatherIcon from './weatherIcon/WeatherIcon'

function WeatherWidget(){

    const location = useLocation()
    const instantWeather = useInstantWeather()
    const nightMode = instantWeather?.weather[0]?.icon?.endsWith('n')
    
        return (
            <div className='weather-widget-content'>
                <div className={nightMode ? 'card-dark' : 'card-light'}>
                    {instantWeather ? 
                        <div className='card-contents'>
                            <div className='weather-icon'>
                                <WeatherIcon icon={instantWeather ? instantWeather.weather[0].icon: '01d'}/>
                            </div>
                            <div className='time-and-locale'>
                                <h1>{instantWeather ? instantWeather.main.temp.toFixed(0) : '0'}°</h1>              
                                <div className='locale-name'>
                                    <span>{location.localeName}</span>
                                    <img src={require('../assets/pin.png')} alt='pin icon'/>
                                </div>
                            </div>
                            <div className='weather-info'>
                                <div>
                                    <img src={require('../assets/wind.png')} alt='wind-icon'/>
                                    <span>{instantWeather ? instantWeather.wind.speed.toFixed(0) : '0'}Km/h</span>
                                </div>
                                <div>
                                    <img src={require('../assets/wind-humidity.png')} alt='wind-icon'/>
                                    <span>{instantWeather ? instantWeather.main.humidity.toFixed(0) : '0'}%</span>
                                </div>
                            </div>
                        </div>
                    :
                        <div className='card-contents'>
                            <div className='weather-icon'>
                                <WeatherIcon icon='03d'/>
                            </div>
                            <div className='time-and-locale'>
                                <h3>Looking outside...</h3>              
                            </div>
                        </div>
                    }
                </div>
                {/*<div className='next-days-forecast'>
                    <DailyForecast nightMode={nightMode}/>
                </div>*/}
            </div>
        )
}
export default WeatherWidget;

