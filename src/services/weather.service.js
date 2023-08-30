import {urls, REACT_APP_API_KEY, UNITS} from "../constants/urls";

import { axiosService } from "./axios.service";

export const weatherService = {

getWeatherBySearch:(value)=>axiosService.get(urls.weather, {
    params: {
        "q": value,
        "units": UNITS,
        "APPID": REACT_APP_API_KEY
        
    }
}).then(value => value.data),

getWeatherByLocation: (lat, long)=>axiosService.get(urls.weather , {
    params: {
        "lat": lat,
        "long": long,
        "units": UNITS,
        "APPID": REACT_APP_API_KEY
    }
}).then(value => value.data)
}

