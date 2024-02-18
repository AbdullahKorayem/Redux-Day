import {createSlice}  from "@reduxjs/toolkit";



const languageSlice = createSlice({
    name:'language',
    initialState:{language:'en'},
    reducers:{

        toChangeLanguage:(state,action)=>{
            state.language=action.payload

        }

    }
})
export const {toChangeLanguage}=languageSlice.actions

export default languageSlice.reducer