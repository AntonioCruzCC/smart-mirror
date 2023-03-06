import { useEffect, useState } from "react"
import axios from "axios";
import useLocation from "../location/useLocation"

function useInstantWeather(){
    
    const [instantWeather, setInstantWeather] = useState()
    const locale = useLocation()

    useEffect(()=>{
        if(locale.localeName === 'Please enable location')
            return
        const params = {
            lat: Number(locale.lat).toFixed(2),
            lon: Number(locale.lon).toFixed(2),
            units: 'metric',
            appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY
        }
        axios.get('https://api.openweathermap.org/data/2.5/weather', {params: params}).then(({data}) => {
            setInstantWeather(data)
        })
    }, [locale])

    return instantWeather
}

export default useInstantWeather