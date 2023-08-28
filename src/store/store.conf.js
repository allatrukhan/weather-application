import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import searchCityWeatherReduser from "./searchSlice";

const store = configureStore ({
    reducer:{
        weatherReducer: weatherReducer,
        searchCityWeatherReduser: searchCityWeatherReduser
    }
})

export default store; 