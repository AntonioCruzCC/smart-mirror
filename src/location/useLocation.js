import axios from "axios";
import { useState, useEffect } from "react";

function useLocation(){
    const [localeName, setLocaleName] = useState('Please enable location')
    const [locale, setLocale] = useState({localeName: localeName})

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((userLocale) => {
            setLocale({
                localeName: localeName,
                lat: userLocale.coords.latitude,
                lon: userLocale.coords.longitude
            })
            const params = {
                lat: userLocale.coords.latitude,
                lon: userLocale.coords.longitude,
                limit: 1,
                appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY
            }
            axios.get('http://api.openweathermap.org/geo/1.0/reverse', {params: params}).then(({data}) =>{
                setLocaleName(data[0].name)
            })
        })
    }, [localeName])

    return locale
}

export default useLocation