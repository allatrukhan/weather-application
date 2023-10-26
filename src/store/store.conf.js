// import {legacy_createStore} from "redux";
import {configureStore } from "@reduxjs/toolkit";
// import {applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import searchCityWeatherReduser from "./searchSlice";
import userReduser from "./userSlice";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

const store = configureStore ({
    reducer:{
        searchCityWeatherReduser: searchCityWeatherReduser,
        user: userReduser
    }
})

// const rootReduser = combineReducers({
//     searchCityWeatherReduser: searchCityWeatherReduser,
//     user: userReduser
// }   
// );

// export const store = legacy_createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));

export default store; 