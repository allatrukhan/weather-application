import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { weatherService } from "../services/weather.service";
import searchValue from "../store/searchSlice";

export const getAllWeatherCards = createAsyncThunk(
    'weatherSlice/getAllWeatherCards',
    async(_ , {rejectWithValue})=>{
        try{
            const weatherCards = await weatherService.getWeatherBySearch(searchValue);
            return weatherCards;
        }
        catch (e){
            return rejectWithValue(e.message);
        }
    }
)

const weatherSlice = createSlice({
      name: 'weatherSlice',
      initialState: {
        weatherCards:[],
        status: null,
        error: null,
        info: "Weather forecast"
      },
       reducers: {
        addCard: (state, action)=>{ 
            state.weatherCards.push({
                id: new Date().getTime(),
                ...action.payload.data
            })    
        },
        deleteCard: (state, action)=>{ 
            state.weatherCards = state.weatherCards.filter(weatherCard => weatherCard.id !== action.payload.id)
        }
       },
       extraReducers:{
        [getAllWeatherCards.pending]: (state) => {
            state.status = 'pending'
        },
        [getAllWeatherCards.fulfilled]:(state, action) =>{
            try {
                state.searchObject = action.payload.data.results
            } catch (e) {
                state.searchObject = []
            }
        },
        [getAllWeatherCards.rejected]:(state, action) =>{
            state.status ='rejected';
            state.error = action.payload;
        }

       }
}  
)

const weatherReducer = weatherSlice.reducer;
export const {deleteCard} = weatherSlice.actions;
export default weatherReducer;