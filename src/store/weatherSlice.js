import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import { weatherService } from "../services/weather.service";

// export const getAllWeatherCards = createAsyncThunk(
//     'weatherSlice/getAllWeatherCards',
//     async([searchValue] , {rejectWithValue})=>{
//         try{
//             const weatherCards = await weatherService.getWeatherBySearch(searchValue);
//             return weatherCards.data;
//         }
//         catch (e){
//             return rejectWithValue(e.message);
//         }
//     }
// )

// export const getAllWeatherCards = createAsyncThunk(
//     'weatherSlice/getAllWeatherCards',
//     async([latitude, longitude] , {rejectWithValue})=>{
//         try{
//             const weatherCards = await weatherService.getWeatherByLocation(latitude, longitude);
//             return weatherCards.data;
//         }
//         catch (e){
//             return rejectWithValue(e.message);
//         }
//     }
// )

const weatherSlice = createSlice({
      name: 'weatherSlice',
      initialState: {
        weatherCards:[],
        status: null,
        error: null,
        info: "Weather forecast"
      },
       reducers: {
        // addCard: (state, action)=>{ 
        //     state.weatherCards.push({
        //         id: new Date().getTime(),
        //         ...action.payload.data
        //     })    
        // },
        // deleteCard: (state, action)=>{ 
        //     state.weatherCards = state.weatherCards.filter(weatherData => weatherData.id !== action.payload.id)
        // }
       },
       extraReducers:{
        // [getAllWeatherCards.pending]: (state) => {
        //     state.status = 'pending'
        // },
        // [getAllWeatherCards.fulfilled]:(state, action) =>{
        //     try {
        //         state.weatherCards = action.payload.data.results
        //     } catch (e) {
        //         state.weatherCards = []
        //     }
        // },
        // [getAllWeatherCards.rejected]:(state, action) =>{
        //     state.status ='rejected';
        //     state.error = action.payload;
        // }

       }
}  
)

const weatherReducer = weatherSlice.reducer;
export const {deleteCard} = weatherSlice.actions;
export default weatherReducer;