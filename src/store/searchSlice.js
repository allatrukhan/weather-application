import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {weatherService} from "../services/weather.service";
import searchValue from "../components/SearchCityWeather/SearchCityWeather";

const initialState = {
    searchObject: searchValue,
    status: null
}

export const searchGetCityWeather = createAsyncThunk(
    'searchCityWeather/searchGetCityWeather',
    async (searchValue) => {
        if (searchValue.length === 0){
            return null
        }
        try {
            return await weatherService.searchCityWeather(searchValue)
        } catch (e) {
            console.log(e)
        }
    }
)
const searchCityWeatherSlice = createSlice({
    name: 'searchCityWeather',
    initialState,
    reducers: {},
    extraReducers: {
        [searchGetCityWeather.pending]: (state) => {
            state.status = 'pending'
        },
        [searchGetCityWeather.fulfilled]: (state, action) => {
            try {
                state.searchObject = action.payload.data.results
            } catch (e) {
                state.searchObject = []
            }
        }

    }
});

const searchCityWeatherReduser = searchCityWeatherSlice.reducer;
export default searchCityWeatherReduser;