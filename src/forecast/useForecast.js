import { useEffect, useState } from "react"
import axios from "axios";
import useLocation from "../location/useLocation"

function useForecast(){
    const [forecast, setForecast] = useState()
    const locale = useLocation()

    useEffect(()=>{
        if(locale.localeName === 'Please enable location')
            return
        const params = {
            lat: Number(locale.lat).toFixed(2),
            lon: Number(locale.lon).toFixed(2),
            units: 'metric',
            exclude: 'minutely',
            appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY
        }
        axios.get('https://api.openweathermap.org/data/3.0/onecall', {params: params}).then(({data}) => {
            setForecast(data)
        })                    
    }, [locale])

    return forecast
}

export default useForecast