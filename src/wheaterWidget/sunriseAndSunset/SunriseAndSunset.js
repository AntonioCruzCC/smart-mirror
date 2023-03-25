import React from "react"
import './SunriseAndSunset.css'

function SunriseAndSunset(props) {
    return (
        <div className={'medium-card ' + (props.nightMode ? 'dark' : 'light')}>
            <div className="medium-card-contents">
                <div className="sunrise-or-sunset">
                    <img src={require(`../../assets/01d.png`)} alt='weatherIcon' />
                    <span>{new Date(props.forecast.current.sunrise * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="sunrise-or-sunset">
                    <img src={require(`../../assets/01n.png`)} alt='weatherIcon' />
                    <span>{new Date(props.forecast.current.sunset * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </div>
        </div>
    )
}

export default SunriseAndSunset