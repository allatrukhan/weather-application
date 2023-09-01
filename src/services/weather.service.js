import {urls, REACT_APP_API_KEY, UNITS} from "../constants/urls";

import { axiosService } from "./axios.service";
import axios from "axios";

axios.defaults.baseURL =  'https://api.openweathermap.org/data/2.5';

export const weatherService = {

getWeatherBySearch:(value)=> axios.get(`/weather/?q=${value}&&units=metric&APPID=${REACT_APP_API_KEY}`
    // urls.weather, {
    // params: {
    //     "q": value,
    //     "units": UNITS,
    //     "APPID": REACT_APP_API_KEY
        
    // }
// }
),

getWeatherByLocation: (lat, long)=>axiosService.get(urls.weather , {
    params: {
        "lat": lat,
        "long": long,
        "units": UNITS,
        "APPID": REACT_APP_API_KEY
    }
}).then(value => value.data)
}

