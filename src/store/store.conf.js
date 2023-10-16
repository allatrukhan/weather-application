import {configureStore} from "@reduxjs/toolkit";
import searchCityWeatherReduser from "./searchSlice";

const store = configureStore ({
    reducer:{
        searchCityWeatherReduser: searchCityWeatherReduser
    }
})

export default store; 