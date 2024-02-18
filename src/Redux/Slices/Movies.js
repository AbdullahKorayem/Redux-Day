import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API_URL_Axios from "../../Axios/Axios";
API_URL_Axios

export const MoviesAction = createAsyncThunk("Movies/GetAll", async () => {
    const Response = await API_URL_Axios.get("/movie/popular?&page=1");
    return Response.data
})

export const MoviesSearchAction = createAsyncThunk("Movies/Search", async (message) => {
    const Response = await API_URL_Axios.get(`/search/movie?query={${message}}`);
    return Response.data
})





const MoviesSlice = createSlice({
    name: 'Movies',
    initialState: { Movies: [] },
    extraReducers: (builder) => {
        builder
            .addCase(MoviesAction.fulfilled, (state, action) => {
                state.Movies = action.payload

            })

            .addCase(MoviesAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(MoviesAction.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(MoviesSearchAction.fulfilled, (state, action) => {
                state.Movies=action.payload

            })
            .addCase(MoviesSearchAction.pending, (state, action) => {
                // Handle pending state if needed
            });


    }
})

// const MoviesSearchSlice=createSlice({
//     name:Movies
// })





export default MoviesSlice.reducer