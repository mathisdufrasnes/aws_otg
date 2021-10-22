import { configureStore } from '@reduxjs/toolkit'
import langReducer from './reducers/languageSlice'


export const store = configureStore({
    reducer: {
        lang : langReducer,
    },
});