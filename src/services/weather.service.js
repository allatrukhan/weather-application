import {urls, REACT_APP_API_KEY, UNITS} from "../constants/urls";

// import { axiosService } from "./axios.service";
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

getWeatherByLocation: (latitude, longitude)=>axios.get(`/weather/?lat=${latitude}&lon=${longitude}&&units=metric&APPID=${REACT_APP_API_KEY}`
//     params: {
//         "lat": lat,
//         "long": long,
//         "units": UNITS,
//         "APPID": REACT_APP_API_KEY
//     }
// }).then(value => value.data)
),

    getWeatherForecast: (value)=> 
        // const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
       axios.get(`/forecast/?q=${value}&&units=metric&APPID=${REACT_APP_API_KEY}` 
    //    axios.get(`/forecast?lat=${latitude}&lon=${longitude}&&units=metric&exclude=daily&APPID=${REACT_APP_API_KEY}`
   ) 

}

// getWeatherForecast: (forecast=[])=> {
//     try {
//         switch (forecast) {
//         case 'search': 
//             axios.get(`/forecast/?q=${value}&&units=metric&APPID=${REACT_APP_API_KEY}`)
//         case 'current':
//             axios.get(`/forecast/?lat=${latitude}&lon=${longitude}&&units=metric&APPID=${REACT_APP_API_KEY}`)
// } 
// }catch (err) {
//     throw err;
// } 
// }