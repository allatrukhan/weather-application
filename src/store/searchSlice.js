import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {weatherService} from "../services/weather.service";

const initialState = {
    searchObject: [],
    dailyForecast: [[], ""],
    status: null
}

export const refreshCard = createAsyncThunk(
    'refreshCard/refreshCard',
    async (name) => {
        try {            
            return await weatherService.getWeatherBySearch(name)
        } catch (e) {
            console.log(e)
        }
    }
)

export const searchGetCityWeather = createAsyncThunk(
    'searchCityWeather/searchGetCityWeather',
    async (searchValue) => {
        if (searchValue.length === 0){
            return null
        }
        try {
            return await weatherService.getWeatherBySearch(searchValue)
        } catch (e) {
            console.log(e)
        }
    }
)

export const weatherForecast = createAsyncThunk(
    'forecast/weatherForecast',
    async (searchValue) => {
        if (searchValue.length === 0){
            return null
        }
        try {
            return await weatherService.getWeatherForecast(searchValue)
        } catch (e) {
            console.log(e)
        }
    }
)

export const locationGetCityWeather = createAsyncThunk(
    'locationCityWeather/locationGetCityWeather',
    async (obj) => {
        if (!obj.lat&&!obj.long){
            return null
        }

    try{
            return await weatherService.getWeatherByLocation(obj.lat, obj.long)
        } catch (e) {
            console.log(e)
        }
    }
)

const searchCityWeatherSlice = createSlice({
    name: 'searchCityWeather',
    initialState,
    reducers: {
        deleteCard: (state, action)=>{ 
            state.searchObject = state.searchObject.filter(weatherData => weatherData.id !== action.payload.id)
            },
    },
    extraReducers: {
        [weatherForecast.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            console.log(action.payload)
            state.dailyForecast[0]=(action.payload.data.list.filter(weatherForecastData => weatherForecastData.dt_txt.includes("18:00:00")));
            state.dailyForecast[1]=(action.payload.data.city.name);
            
    },    
            
        [searchGetCityWeather.pending]: (state) => {
            state.status = 'pending'
        },
        [searchGetCityWeather.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            console.log(action.payload)
            try {
                const indx = state.searchObject.findIndex(el=> el.name===action.payload.data.name);
                if (indx===-1){
                    state.searchObject.push(action.payload.data);
                }
            } catch (e) {

            }
        },
        [refreshCard.pending]: (state) => {
            state.status = 'pending'
        },
        [refreshCard.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            try {
                const indx = state.searchObject.findIndex(el=> el.name===action.payload.data.name);
                state.searchObject.splice(indx, 1, action.payload.data)
            } catch (e) {
                state.searchObject = []
            }
        },

        [locationGetCityWeather.pending]: (state) => {
            state.status = 'pending'
        },
        [locationGetCityWeather.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            try{ const indx = state.searchObject.findIndex(el=> el.name===action.payload.data.name);
                if (indx===-1){
                    state.searchObject.push(action.payload.data);
                }}catch (e) {
                    // state.searchObject = []
                }
        }

    }
});

const searchCityWeatherReduser = searchCityWeatherSlice.reducer;
export const {deleteCard} = searchCityWeatherSlice.actions;
export default searchCityWeatherReduser;



