import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {userService} from "../services/user.service";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const request = axios.post('https://jsonplaceholder.typicode.com/users', userCredentials);
        const response = await request;
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    // userService.login()
    });

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (newUserCredentials) => {
        const request = axios.post('https://jsonplaceholder.typicode.com/users', newUserCredentials);
        const response = await request;
        localStorage.setItem('user', JSON.stringify(response));
        return response;
//    async (newUserCredentials) => {
//     if (newUserCredentials === 0){
//         return null
//     } else{
//         return await userService.registration(newUserCredentials)
//     }
// }
// async(newUserCredentials)=>{
//  try{
//         const request = axios.post('https://localhost:5000/api/auth/registration', newUserCredentials);
// console.log(request);
//  }  catch (e){
//      console.log(e);
//  }
    //     }
    // async(newUserCredentials)=>{
    //     try{
    //         const response = await axios.post(`https://localhost:5000/api/auth/registration`, newUserCredentials);
    //         alert (response.data.message)
    //     } catch (e){
    //         alert(e.response.data.message);
    //     }
    //     return response;
    // }
// }
     } );

// export const logoutUser = createAsyncThunk(
//     'user/loguotUser'
    
//     )


const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        registration: false,
        user: null,
        error: null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending, (state)=>{
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state, action)=>{
            // state.loading = false;
            state.user = null;
            console.log(action.error.message);
            if (action.error.message === 'Request failed with status code 401'){
                state.error = 'Access denied. Invaild credentials';
            }
            else{
                state.error = action.error.message;
            }
        })
        .addCase(registerUser.pending, (state)=>{
            state.registration= true;
            state.user = null;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action)=>{
            state.user = action.payload;
            state.error = null;
        })
        .addCase(registerUser.rejected, (state, action)=>{
            state.registration = false;
            state.user = null;
            console.log(action.error.message);
            if (action.error.message === 'Request failed with status code 401'){
                state.error = 'Invaild credentials. Try once again.';
            }
            else{
                state.error = action.error.message;
            }      
    })
}
}
)

export default userSlice.reducer;