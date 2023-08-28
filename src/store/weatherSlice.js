import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { weatherService } from "../services";
import value from "../store/searchSlice";

export const getAllWatherCards = createAsyncThunk(
    'weatherSlice/getAllWatherCards',
    async(_ , {rejectWithValue})=>{
        try{
            const weatherCards = await weatherService.getWeatherBySearch(value);
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
        [getAllWatherCards.pending]:(state, action) =>{
            state.status ='pending',
            state.error = null;
        },
        [getAllWatherCards.fulfilled]:(state, action) =>{
            state.status ='fulfilled',
            state.weatherCards = action.payload;
        },
        [getAllWatherCards.rejected]:(state, action) =>{
            state.status ='rejected';
            state.error = action.payload;
        }

       }
}  
)

const weatherReducer = weatherSlice.reducer;
export const {addCard, deleteCard} = weatherSlice.actions;
export default weatherReducer;