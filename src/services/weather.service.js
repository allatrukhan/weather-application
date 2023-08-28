import {urls, REACT_APP_API_KEY} from "../constants/urls";
import value from "../store/searchSlice";
import { axiosService } from "./axios.service";

export const weatherService = {

getWeatherBySearch:(value)=>axiosService.get(urls.weather + `/?q=${value}&&units=metric&APPID=${REACT_APP_API_KEY}`, {
    params: {
        "api_key": REACT_APP_API_KEY,
        "search_str": value
    }
}).then(value => value.data),

getWeatherByLocation: (lat, long)=>axiosService.get(urls.weather + `?lat=${lat}&lon=${long}&&units=metric&APPID=${REACT_APP_API_KEY}`, {
    params: {
        "api_key": REACT_APP_API_KEY,
        "latitude": lat,
        "longitude": long
    }
}).then(value => value.data)
}

