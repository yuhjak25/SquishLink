import { configureStore } from "@reduxjs/toolkit"
import linkReducer from '../libs/links'

export const store = configureStore({
    reducer: {
        links: linkReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch