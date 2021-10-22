import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: "fr",
}

export const languageSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.value = action.payload
        },
        toggle: (state) => {
            if (state.value === "fr") {
                state.value = "gb"
            } else {
                state.value = "fr"
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const {setLang, toggle} = languageSlice.actions

export default languageSlice.reducer