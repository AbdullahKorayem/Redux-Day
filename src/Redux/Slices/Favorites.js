import { createSlice } from "@reduxjs/toolkit";


const FavoritesSlice = createSlice({
    name: 'Favorites',
    initialState: {
        Favorites: []
    },
    reducers: {
        addToFavorites: (state, action) => {
            state.Favorites.push(action.payload);
        },
        removeFromFavorites: (state, action) => {

            state.Favorites = state.Favorites.filter(item => item.id !== action.payload.id);
            console.log('gggggg')

        },


    }
})

export const { addToFavorites, removeFromFavorites } = FavoritesSlice.actions

export default FavoritesSlice.reducer