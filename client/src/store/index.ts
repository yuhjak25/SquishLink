import { configureStore } from "@reduxjs/toolkit"
import linksReducer from '../libs/links'

export const store = configureStore({
    reducer: {
        linksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch