import { configureStore } from "@reduxjs/toolkit";
import languageSlice from './Slices/Language';
import FavoritesSlice from './Slices/Favorites';
import MoviesReducer from './Slices/Movies';


const Store = configureStore({
    reducer: {
        Favorite: FavoritesSlice,
        language: languageSlice,
        Movies: MoviesReducer
    }
})


export default Store